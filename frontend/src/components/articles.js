import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import Logo from '../assets/logo.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import Mascot3 from '../assets/mascot3.js';
import ButtonMain from './buttonMain.js';
import ArticleTile from './articleTile';
import { InputBar } from './InputBar.js';




const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Make a fetch request to fetch articles from the API
        fetch('http://localhost:3005/fetch_articles')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Set the fetched articles in the state
                setArticles(data);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, []); // Run once when component mounts

    return (
        <div className='articles' style={{ marginTop: '2rem', display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
            <h2> Explore the Depths of Knowledge, One Wave at a Time</h2>
            {/* Render InputBar component here */}
            <div className='articleGrid'>
                {/* Map over the articles and render an ArticleTile for each article */}
                {articles.map((article, index) => (
                    <ArticleTile title={article.title} description={article.snippet} link={article.url} />
                ))}
            </div>
        </div>
    );
}

export default Articles
