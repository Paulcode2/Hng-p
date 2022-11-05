/* eslint-disable jsx-a11y/anchor-has-content */
// import logo from './logo.svg';
// import './App.css';
// import './style.css'
// import {BrowserRouter, Route, Routes} from 'react-router-dom' 
// import Page from './page';
// import Contact from './contact';


// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>

//      <Route path='/' element={<Page/>} />
//         <Route path='/contact' element={<Contact/>} />
//     </Routes>
    
//     </BrowserRouter>

//     );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import './style.css'
import Page from './page';
import Contact from './contact';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" exact element={<Page />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </React.Fragment>
  );
};

export default App;


