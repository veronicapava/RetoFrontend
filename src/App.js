import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Form from "./components/Form";
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import UsersList from './components/UserList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createUser" element={<Form />} />
        <Route path="/findUser" element={<SearchPage />} />
        <Route path="/userList" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
