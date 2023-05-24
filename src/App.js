import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Form from "./components/Form";
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
