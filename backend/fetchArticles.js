const fs = require('fs').promises;

const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
    token: "xlg4vfmNFDyLwEaPtrTqFdI3rPLvL1Um7D53jMKN",
});

async function fetchArticles(req, res) {
    const chatStream = await cohere.chatStream({
        chatHistory: [],
        message: "Fetch articles on marine pollution in Pacific North-west",
        connectors: [{ id: "web-search" }],
        stream: true
    });

    for await (const message of chatStream) {
        if (message.eventType == "search-results" && 'documents' in message) {
            const articles = message.documents;
            try {
                await fs.writeFile("articles.json", JSON.stringify(articles));
                console.log('Articles saved successfully.');
            } catch (err) {
                console.error('Error saving articles:', err);
            }
            res.json({ success: true, message: 'Articles fetched and saved successfully.' });
            break; // Stop processing after saving articles
        }
    }
}

module.exports = fetchArticles;