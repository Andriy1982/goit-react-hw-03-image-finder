import React, { Component } from 'react';
import './Searchbar.css'

export default class Searchbar extends Component {
  state = {
    searchImage: '',
  }

  handleInputChange = e => {
    this.setState({
      searchImage: e.target.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImage.trim() === '') {
      alert('Nonono')
      return;
    }
    this.props.onSubmit(this.state.searchImage);
    this.setState({
      searchImage: '',
    })
  }


  render() {
    const {searchImage} = this.state;
    return (
        <header className="Searchbar">
        <form 
        onSubmit = {this.handleSubmit}
        className="SearchForm">
          <button type="submit" className="SearchForm-button" >
            <span className="SearchForm-button-label">Search</span>
          </button>
      
          <input
            onChange = {this.handleInputChange}
            value = {searchImage}
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}


