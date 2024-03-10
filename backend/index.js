const path = require("path");
const express = require("express");
const cors = require("cors");
const port = 3005;
const app = express();
const readline = require("readline");
const fs = require("fs");

const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
    token: "xlg4vfmNFDyLwEaPtrTqFdI3rPLvL1Um7D53jMKN",
});

app.use(cors());
app.use(express.json());

// example on local port
app.get('/', (req, res) => {
  res.send('Hello World!');
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

  return res.json({
    status: "success",
    text: response.message,
  })
  // Write articles to a JSON file (optional)
  fs.writeFile("articles.json", JSON.stringify(articles), function (err) {
    if (err) throw err;
    console.log('Articles saved successfully.');
  });
});

app.post('/generate_question', async (req,res) => {
  const response = await cohere.chatStream({
    chatHistory: [
    ],
    message: "Write me a question about marine pollution and include the right answer",
    model: 'command-light',
    // documents: articlesData,
    // promptTruncation: "AUTO"
    connectors: [{ id: "web-search" }],
    documents: [
      {
        id: '1',
        title: 'What are the main causes of marine pollution?',
        text: 'Tanker spills, backwater contamination, Incandues waste, Atmospheric pollution, Runoff from land (from agriculture or urban storm drains), Nonpoint source pollution, Natural disasters'
      },
    ],
    temperature: 0.6,
    stream: true
  });

  for await (const message of chatStream) {
    if(message.eventType == 'stream-end' && message.is_finished == true)
      console.log(message);
      res.json({
        status: "success",
        text: response.message,
      })
  }
});

// listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {};