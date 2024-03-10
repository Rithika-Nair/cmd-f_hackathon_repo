import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Header from './components/header';
import ArticleTile from './components/articleTile';

function App() {
  return (
    <div >
      <Header></Header>
     <Landing></Landing>
     <ArticleTile></ArticleTile>
    </div>
  );
}

export default App;
