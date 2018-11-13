import React, { Component } from 'react';
import './App.css';
import './components/HelloWorld';
import axios from 'axios';

const API_ENDPOINT = 'https://YOUR_API_ENDPOINT_HERE/dev'; //Paste your API Gateway endpoint here

class App extends Component {

  state = {
    books: [], // Used to store the list of book objects
    title: '', // Used to store the variable in the title text input
    author: '', // Used to store the variable in the author text input
    year: '', // Used to store the variable in the year number input
    bookId: null // Used to store the id of the book id you're currently editing
  }

  // Runs when this component is mounted onto the page
  componentDidMount() {
    // Make API call to get all books using axios and save to state
    this.getAllBooks();
  }

  // Gets all books from the API endpoint
  getAllBooks = () => {
    axios.get(`${API_ENDPOINT}/book`)
      .then(res => {
        this.setState({
          books: res.data.books
        });
      });
  }

  // Creates a new book from the state store using the API endpoint
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

  // TODO: Updates an existing book using variables in the state store
  onUpdateBook = () => {
    alert('not implemented yet');
    // Implement the update function using axios's put method
  }

  // TODO: Updates an existing book using variables in the state store
  onDelete = (bookId) => {
    alert('not implemented yet');
    /*
    Implement the delete function using axios's delete method, the second parameter should be
    {
      data: {
        bookId: bookId
      }
    }
    */
  }

  // TODO 
  resetForm = () => {
    //Clear the state store of all variables
  }

  onTitleChange = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value
    });
  }

  // TODO 
  onAuthorChange = (event) => {
    //Implement a state update on text change for the state parameter "author"
  }

  // TODO 
  onYearChange = (event) => {
    //Implement a state update on text change for the state parameter "year"
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
            Author: <input type="text" />&nbsp;
            Year: <input type="number" />&nbsp;

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
