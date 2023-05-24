import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Form from "./components/Form";
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<Form />} />
        <Route path="/findUser" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
