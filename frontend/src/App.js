import logo from './logo.svg';
import './App.css';
import Landing from './components/landing.js';
import Header from './components/header.js';
import Video from './components/video.js';
import ReactPlayer from 'react-player'


function App() {
  return (
    <div >
      <Header></Header>
     <Landing></Landing>
     <h2> Explore Ocean Wisdom: Dive into Engaging Videos!</h2>
     <Video></Video>

    </div>
  );
}

export default App;
