import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList.jsx";
import BookDetail from "./components/BookDetail.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
