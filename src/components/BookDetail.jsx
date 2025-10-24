import React from "react";
import { useParams, Link } from "react-router-dom";
import booksData from "../data/booksData";

function BookDetail() {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Book not found</h2>
        <Link to="/">Back to Book List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p>⭐ Rating: {book.rating}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default BookDetail;
