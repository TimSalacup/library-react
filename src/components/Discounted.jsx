import React from "react";
import { books } from "../data.js";
import Book from "./ui/Book.jsx";

const Discounted = () => {
  return (
    <div>
      <section id="recent">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Discount <span className="purple">Books</span>
            </h2>
            <div className="books">
              {books
                .filter((book) => book.salePrice > 0)
                .map((book) => <Book book={book} key={book.id} />)
                .slice(0, 8)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discounted;
