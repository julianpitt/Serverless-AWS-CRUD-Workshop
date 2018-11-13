import React, { Component } from 'react';
import './App.css';
import './components/HelloWorld';
import axios from 'axios';

const API_ENDPOINT = 'https://g9fx23sr1b.execute-api.us-east-1.amazonaws.com/dev'; //Paste your API Gateway endpoint here

class App extends Component {

  state = {
    books: [],
    title: '',
    author: '',
    year: '',
    bookId: null
  }

  componentDidMount() {
    // Make API call to get all books using axios and save to state
    this.getAllBooks();
  }

  getAllBooks = () => {
    axios.get(`${API_ENDPOINT}/book`)
      .then(res => {
        this.setState({
          books: res.data.books
        });
      });
  }

  resetForm = () => {

    this.setState({
      title: '',
      author: '',
      year: '',
      bookId: null
    });

  }

  onAuthorChange = (event) => {
    event.preventDefault();
    this.setState({
      author: event.target.value
    });
  }

  onTitleChange = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value
    });
  }

  onYearChange = (event) => {
    event.preventDefault();
    this.setState({
      year: event.target.value
    });
  }

  onCreateBook = () => {
    const book = {
      author: this.state.author,
      title: this.state.title,
      year: this.state.year
    };

    axios.post(`${API_ENDPOINT}/book`, {
      book
    })
      .then(res => {
        this.resetForm();
        this.getAllBooks();
      });

  }

  onUpdateBook = () => {
    const book = {
      author: this.state.author,
      title: this.state.title,
      year: this.state.year,
      bookId: this.state.bookId
    };

    axios.put(`${API_ENDPOINT}/book`, {
      book
    })
      .then(res => {
        this.resetForm();
        this.getAllBooks();
      });
  }

  onDelete = (bookId) => {
    axios.delete(`${API_ENDPOINT}/book`, {
      data: {
        bookId: bookId
      }
    })
      .then(res => {
        this.getAllBooks();
      });
  }

  onCancelUpdate = () => {
    this.resetForm();
  }

  onSetUpdate = (book) => {
    this.setState({
      ...book
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello Serverless fans!
        </header>
        <section id="main">
          <form style={{ width: '960px', margin: 'auto' }}>
            Title: <input type="text" onChange={this.onTitleChange} value={this.state.title} />&nbsp;
            Author: <input type="text" onChange={this.onAuthorChange} value={this.state.author} />&nbsp;
            Year: <input type="number" onChange={this.onYearChange} value={this.state.year} />&nbsp;

            {this.state.bookId ?
              (
                <span>
                  <button type="button" onClick={this.onUpdateBook}>Update</button>&nbsp;
                  <button type="button" onClick={this.onCancelUpdate}>Cancel</button>
                </span>
              )
              :
              (
                <button type="button" onClick={this.onCreateBook}>Add</button>
              )
            }
            < hr />
            <table style={{ width: '100%', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books &&
                  this.state.books.map((book) => (
                    <tr key={book.bookId} style={{ backgroundColor: book.bookId === this.state.bookId ? 'lightblue' : '' }}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.year}</td>
                      <td>
                        <button type="button" onClick={() => { this.onSetUpdate(book) }}>Edit</button>&nbsp;
                        <button type="button" onClick={() => { this.onDelete(book.bookId) }}>Delete</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </form>
        </section>
      </div >
    );
  }
}

export default App;
