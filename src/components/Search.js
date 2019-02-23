import React, { Component } from 'react';

class Search extends Component {

  state = {
    term: ''
  }

  handleChange = (e) => {
    this.setState({term: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.term)
  }

  handleClear = () => {
    this.setState({term: ''})
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="book"
            onChange={this.handleChange}
            value={this.state.term || ''}
            className="input-search"/>
          <span onClick={this.handleClear}>x</span>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;
