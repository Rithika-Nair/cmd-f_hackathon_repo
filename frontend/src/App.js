import logo from './logo.svg';
import './App.css';
import Landing from './components/landing.js';
import Header from './components/header.js';
import Video from './components/video.js';
import ReactPlayer from 'react-player'
import ArticleTile from './components/articleTile';
import ButtonSub from './components/buttonSub.js';
import { InputBar } from './components/InputBar.js';
import Articles from './components/articles.js';
import Quiz from './components/quiz.js';
import QuizScores from './components/quizScore.js';
import QuizQuestion from './components/quizQuestion.js';




function App() {
  return (
    <div  >
      <Header></Header>
      <div style={{display:"flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
     <Landing></Landing>
     <Video id='1'></Video>
     
     <ButtonSub ></ButtonSub>
     <QuizQuestion id='2'></QuizQuestion>
     <Articles id='3'></Articles>
     
     </div>
    </div>
  );
}

export default App;
