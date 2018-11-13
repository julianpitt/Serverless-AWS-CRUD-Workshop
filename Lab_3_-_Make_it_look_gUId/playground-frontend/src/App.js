import React, { Component } from 'react';
import './App.css';
import './components/HelloWorld';
import axios from 'axios';
import HelloWorld from './components/HelloWorld';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com'; //Paste your API Gateway endpoint here

class App extends Component {

  state = {
    books: [],
    randomItems: [
      {
        key: 1,
        value: "hello"
      },
      {
        key: 2,
        value: "world"
      }
    ],
    randomPosts: []
  }

  componentDidMount() {
    // Make API call to get all books using axios and save to state
    axios.get(`${API_ENDPOINT}/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({
          randomPosts: posts
        });
      })
  }

  passedThroughFunction = () => {
    alert('Invoked in the app.js file');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello Serverless fans!
        </header>
        <section id="main">
          <HelloWorld
            singleValue="I'm a single value"
            singleObject={{ message: "I'm an object" }}
            randomItems={this.state.randomItems || []}
            randomPosts={this.state.randomPosts || []}
            randomFunction={this.passedThroughFunction}
          />
        </section>
      </div>
    );
  }
}

export default App;
