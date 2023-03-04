import React from "react";
import {BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


// Pages
import CV from './pages/CV';
import Home from './pages/Home'

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cv' element={<CV/>} />
    </Routes>
    </Router>  
  );
}

export default App;