import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import ShowPage from './components/ShowPage'
import { API_KEY } from './keys.js'

class App extends Component {

  state = {
    books: [],
    loading: null
  }

  handleSearch = (term) => {
    if (term === '') {
      this.setState({books: null, loading: false})
    } else {
      this.setState({books: [], loading: true})
      setTimeout(() => {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=20&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => this.setState({books: data.items, loading: false}))
        .catch(err => console.log(err))
      }, 1000)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>BOOK FINDER</h1>
        <Search handleSearch={this.handleSearch}/>
        <ShowPage books={this.state.books} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
