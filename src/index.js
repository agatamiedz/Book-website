import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import "./index.css";

const bookList = [
  {
    id: 1,
    title: "Life is Elsewhere",
    author: "Milan Kundera",
    rate: "8/10⭐️",
  },
  {
    id: 2,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    rate: "10/10⭐️",
  },
  {
    id: 3,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    rate: "9/10⭐️",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [book, setBook] = useState([]);
  function handlenewBook(item) {
    setBook((book) => [...book, item]);
  }
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <AddNewBook onnewBook={handlenewBook} />
      <Book book={book} />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="nav-bar">
      <a href="#home" className="btn-nav-bar" id="navbar">
        Home
      </a>
      <a href="#aboutme" className="btn-nav-bar">
        About me
      </a>
      <a href="#addnewbook" className="btn-nav-bar">
        📚Add new book📖
      </a>
    </div>
  );
}
function Home() {
  return (
    <div className="home" id="home">
      <h1>Welcome to my very first page🤙🏻 </h1>

      <h3>
        Share the book you read recently or get inspired with our recommandation
      </h3>
    </div>
  );
}
function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <>
        <h1 className="aboutmeh">About me</h1>
        <img
          src="photos/correctsizephoto.jpg"
          alt="Image not found"
          className="img"
        />

        <span className="aboutmet">
          My name is Agata Miedzińska. I graduated with master's degree in
          International Business from the University of Gdansk.One year ago I
          decided to rebrand.I am working as a support engineer, but I would
          like to become a front-end developer. That is why I am studying
          javascript, html, css and other technologies. This page is a small
          project which I decided to create as I believe in "learning by doing".
          I hope you will enjoy as much as me while developing that.
        </span>
      </>
    </div>
  );
}

function AddNewBook({ onnewBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rate, setRate] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title && !author) return;
    const newBook = { title, author, rate: `${rate}/10 ⭐️`, cover: "img" };
    console.log(newBook);
    onnewBook(newBook);
    alert("Your book has been added");
    setTitle("");
    setAuthor("");
    setRate(0);
  }
  return (
    <div className="books" id="addnewbook">
      <form className="form" onSubmit={handleSubmit}>
        <h4>Please add the book which you would like to recommand</h4>
        <h4>What is a title?</h4>
        <input
          type="text"
          placeholder="Type title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h4>Who is an author?</h4>
        <input
          type="text"
          placeholder="Type author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <h4>How you rate this book?</h4>

        <input
          type="range"
          min="0"
          max="10"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <span>{rate}⭐️</span>
        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

function Book({ book }) {
  return (
    <div>
      <ul className="books">
        {bookList.map((book) => (
          <List list={book} key={bookList.id} />
        ))}
      </ul>
      <ul className="books">
        {book.map((book) => (
          <List list={book} key={bookList.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ list }) {
  return (
    <li>
      <img src="photos/book.png" alt="Cover not found" />
      <p>{list.title}</p>
      <p>{list.author}</p>
      <span>{list.rate}</span>
    </li>
  );
}

function Footer() {
  return (
    <div className="footer">
      <img className="imgr" src="photos/react.png" alt="Image not found" />
      <footer>
        This website has been created in React, click <a href="#navbar">here</a>{" "}
        to come back to the navigation bar.
      </footer>
    </div>
  );
}
