import React from 'react';
import './App.css';
import Header from './Components/Header';
import Register from './Components/Registration';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
     <Routes>
     <Route path="/" element={ <Home/>} />
       <Route path="/register" element={ <Register/>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
