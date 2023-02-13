import {useEffect,useState} from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCard from './component/NewsCard/NewsCard';
import Header from './component/Header';
const alanKey = process.env.REACT_APP_ALAN_KEY;

function App() {

  const [article,setArticle] = useState([]);
 useEffect(()=> {
  alanBtn({
    key : alanKey,
    onCommand: ({command,articles})=> {
      if(command === 'newHeadlines'){
        //alert('Code works good job')
        console.log(articles);
        setArticle(articles);
      }
    }
  })
 },[])



  return (
    <div className="App">
    <Header />
    
     <NewsCard article={article}/>
    </div>
  );
}

export default App;
