import React from "react";
import booksData from "../data/booksData";
import { Link } from "react-router-dom";

function BookList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Explorer</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {booksData.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p>⭐ {book.rating}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
