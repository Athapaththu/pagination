import './App.css';
import React from 'react';
import TopicList from './component/topicList';
// import FaqList from './component/faqList';
import LanguageItem from './component/languageItem';
import { Pagination } from '@mui/material';


function App() {
  return (
    <div className="App">
       <TopicList/>
       <LanguageItem />
       {/* <FaqList/> */}
    </div>
  );
}

export default App;
