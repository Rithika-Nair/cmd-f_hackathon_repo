const path = require("path");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 3000;
const app = express();
const readline = require("readline");
const fs = require("fs");
const fetchArticles = require('./fetchArticles');
const generateQuestion = require('./generateQuestion');

const articles = require('./articles.json');
const articlesData = Object.values(articles);

const questions = require('./questions.json');
const questionsData = Object.values(questions);

// console.log(questionsData);

// example on local port
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/fetch_articles', fetchArticles);

app.post('/generate_question', generateQuestion);

// listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// web search for articles related to given prompt (varied prompts)
// (async () => {
//   const chatStream = await cohere.chatStream({
//     chatHistory: [
//     ],
//     message: "Fetch articles on marine pollution in the Pacific North-West",
//     // perform web search before answering the question. You can also use your own custom connector.
//     connectors: [{ id: "web-search" }],
//     stream: true
//   });

//   for await (const message of chatStream) {
//     // console.log(message);
//     if (message.eventType = "search-results" && 'documents' in message) {
//       console.log(message.documents);
//       fs.writeFile("articles.json", JSON.stringify(message.documents), function (err) {
//         if (err) throw err;
//         console.log('complete');
//       }
//       );
//     }
//     // if(message.eventType="citation-generation") {
//     //   console.log(message);
//     // }
//   }
// })();

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