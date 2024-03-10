const path = require("path");
const express = require("express");
const cors = require("cors");
const port = 3005;
const app = express();
const readline = require("readline");
const fs = require("fs");

const articles = require('./articles.json');
const articlesData = Object.values(articles);

// const questions = require('./questions.json');
// const questionsData = Object.values(questions);

// cohere requirements
const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
  token: "xlg4vfmNFDyLwEaPtrTqFdI3rPLvL1Um7D53jMKN",
});

// example on local port
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// web search for articles related to given prompt (varied prompts)
(async () => {
  const chatStream = await cohere.chatStream({
    chatHistory: [
    ],
    message: "Fetch articles on marine pollution in the Pacific North-West",
    // perform web search before answering the question. You can also use your own custom connector.
    connectors: [{ id: "web-search" }],
    stream: true
  });

  for await (const message of chatStream) {
    // console.log(message);
    if (message.eventType = "search-results" && 'documents' in message) {
      console.log(message.documents);
      fs.writeFile("articles.json", JSON.stringify(message.documents), function (err) {
        if (err) throw err;
        console.log('complete');
      }
      );
    }
    // if(message.eventType="citation-generation") {
    //   console.log(message);
    // }
  }
})();

(async () => {
  const chatStream = await cohere.chatStream({
    chatHistory: [
    ],
    message: "Write me a question about marine pollution and include the right answer",
    model: 'command-light',
    // documents: articlesData,
    // promptTruncation: "AUTO"
    connectors: [{ id: "web-search" }],
    temperature: 0.6,
    stream: true
  });

  for await (const message of chatStream) {
    if(message.eventType == 'stream-end' && message.is_finished == true)
      console.log(message.response.text);
  }
})();