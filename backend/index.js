const path = require("path");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = 3005;
const app = express();
const readline = require("readline");
const fs = require("fs");
// const fetchArticles = require('./fetchArticles');
const generateQuestion = require('./generateQuestion');

const articles = require('./articles.json');
const articlesData = Object.values(articles);

const questions = require('./questions.json');
const questionsData = Object.values(questions);

const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
    token: "xlg4vfmNFDyLwEaPtrTqFdI3rPLvL1Um7D53jMKN",
});

// console.log(questionsData);

app.use(cors());
app.use(express.json());

// example on local port
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.post('/fetch_articles', (req, res) => {
//   fs.readFile('articles.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading articles.json:', err);
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     try {
//       const articles = JSON.parse(data);
//       res.json(articles);
//     } catch (parseError) {
//       console.error('Error parsing articles.json:', parseError);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
// });

app.post('/generate_question', generateQuestion);

// listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// web search for articles related to given prompt (varied prompts)
app.get("/fetch_articles", async (req, res) => {
  const response = await cohere.chatStream({
    chatHistory: [
    ],
    message: "Fetch articles on marine pollution in the Pacific North-West",
    // perform web search before answering the question. You can also use your own custom connector.
    connectors: [{ id: "web-search" }],
    stream: true
  });

  let articles = [];

  for await (const message of response) {
    if (message.eventType === "search-results" && 'documents' in message) {
      articles.push(...response.documents);
      console.log(response.documents);
    }
  }

  // Send articles array as the response
  res.json(articles);

  // Write articles to a JSON file (optional)
  fs.writeFile("articles.json", JSON.stringify(articles), function (err) {
    if (err) throw err;
    console.log('Articles saved successfully.');
  });
})();

// (async () => {
//   const chatStream = await cohere.chatStream({
//     chatHistory: [
//     ],
//     message: "Write me a question about marine pollution and include the right answer",
//     model: 'command-light',
//     // documents: articlesData,
//     // promptTruncation: "AUTO"
//     connectors: [{ id: "web-search" }],
//     documents: [
//       {
//         id: '1',
//         title: 'What are the main causes of marine pollution?',
//         text: 'Tanker spills, backwater contamination, Incandues waste, Atmospheric pollution, Runoff from land (from agriculture or urban storm drains), Nonpoint source pollution, Natural disasters'
//       },
//     ],
//     temperature: 0.6,
//     stream: true
//   });

//   for await (const message of chatStream) {
//     // if(message.eventType == 'stream-end' && message.is_finished == true)
//       // console.log(message);
//   }
// })();