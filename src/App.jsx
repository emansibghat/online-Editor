import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
