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
    //const [render, setRender] = useState(false);
    const [render, setRender] = useState(false);
    // const [articles, setArticles] = useState();
    // const [article, setArticle] = useState();
    var articles = [];
    const [article, setArticle] = useState({});
    const [article1, setArticle1] = useState({});

    const [article2, setArticle2] = useState({});

    const [article3, setArticle3] = useState({});
    const [article4, setArticle4] = useState({});






    useEffect(() => {
        console.log('hello');
        // Make a fetch request to fetch articles from the API
        fetch('http://localhost:3005/fetch_articles')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('success');
                return response.json();
            })
            .then(data => {
                // Set the fetched articles in the state
                // console.log(data.text);
                articles = (JSON.parse(data.text));
                console.log("yurr");
                setRender(true);
                console.log(articles, render);
                console.log(articles.at(1).title, render);
                setArticle(articles.at(0));
                setArticle1(articles.at(1));
                setArticle2(articles.at(2));
                setArticle3(articles.at(3));
                setArticle4(articles.at(4));
                console.log(article.title);
                console.log("yurr");

            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });

    }, [articles, article, render]); // Run once when component mounts

    return (
        <div className='articles' style={{ marginTop: '2rem', display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
            <h2> Explore the Depths of Knowledge, One Wave at a Time</h2>
            <InputBar ></InputBar>

            <h2> {articles[0]} </h2>
            {render && <div className='articleGrid'>
                {/* Map over the articles and render an ArticleTile for each article */}

                <ArticleTile key={0} title={article.title} description={article.snippet} link={article.url} />
                <ArticleTile key={0} title={article1.title} description={article1.snippet} link={article1.url} />
                <ArticleTile key={0} title={article2.title} description={article2.snippet} link={article2.url} />
                <ArticleTile key={0} title={article3.title} description={article3.snippet} link={article3.url} />
                <ArticleTile key={0} title={article4.title} description={article4.snippet} link={article4.url} />



            </div>
            }
        </div>
    );
}

export default Articles
