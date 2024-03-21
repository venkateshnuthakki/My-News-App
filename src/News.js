import React, { useState } from 'react'
import News1 from './Newscomponent';
import './News.css';
import Newsnav from './Newsnav';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

export default function News() {
  const [pro ,setpro]=useState(0)
  return (
    <div>
          <Router>
          
          <Newsnav/>
          <LoadingBar color='red' progress={pro}  height="5px"   onLoaderFinished={()=>setpro(0)}/>
      <Routes>
        <Route path='/' element={<News1 category='GENERAL' setProgress={setpro}/>} />
        <Route path='/bus' element={<News1 category='BUSINESS' setProgress={setpro}/>} />
        <Route path='/en' element={<News1 category='ENTERTAINMENT'setProgress={setpro}/>} />
        <Route path='/gen' element={<News1 category='GENERAL'setProgress={setpro}/>} />
        <Route path='/health' element={<News1 category='HEALTH'setProgress={setpro}/>} />
        <Route path='/science' element={<News1 category='SCIENCE'setProgress={setpro}/>} />
        <Route path='/sports' element={<News1 category='SPORTS'setProgress={setpro}/>} />
        <Route path='/tech' element={<News1 category='TECHNOLOGY'setProgress={setpro}/>} />

      </Routes>
     </Router>
    </div>
  )
}
