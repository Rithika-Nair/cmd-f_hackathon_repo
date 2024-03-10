const fs = require('fs').promises;

const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
    token: "xlg4vfmNFDyLwEaPtrTqFdI3rPLvL1Um7D53jMKN",
});

async function generateQuestion(req, res) {
    const chatStream = await cohere.chatStream({
      chatHistory: [
      ],
      message: "Generate 3 questions about marine pollution and a short answer for them. Separate them by label.",
      model: 'command-light',
      // documents: articlesData,
      // promptTruncation: "AUTO"
      connectors: [{ id: "web-search" }],
      temperature: 0.6,
      stream: true
    });
  
    for await (const message of chatStream) {
      if(message.eventType == 'stream-end' && message.is_finished == true)
        console.log(message);
        res.send(message);
    }
}

module.exports = generateQuestion;