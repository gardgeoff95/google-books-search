import React, { Component } from "react";
import axios from "axios";
const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
class Searchbar extends React.Component {
  state = {
    query: "",
    results: []
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };
  getInfo = () => {
    axios.get(`${API_URL}${this.state.query}`).then(res => {
      const books = res.data.items;
      this.setState({results: books});
    });
  };
  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter")
      .then(res => {
        console.log(res.data.items);
        const books = res.data.items;
        this.setState({ results: books });
      });
  }
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <button onClick={this.getInfo}>Search</button>
        <ul onChange={this.getInfo}>
          {this.state.results.map(book => (
            <div>
              <li>Title: {book.volumeInfo.title}</li>{" "}
              <button>Save Book!</button>
              <p>Author('s): {book.volumeInfo.authors[0]}</p>
              <p>Description: {book.volumeInfo.description}</p>
              <a href={book.volumeInfo.infoLink}>
                Check this book out on the google store!
              </a>
              <br></br>
              <img src={book.volumeInfo.imageLinks.smallThumbnail}></img>
            </div>
          ))}
        </ul>
      </form>
    );
  }
}

export default Searchbar;
