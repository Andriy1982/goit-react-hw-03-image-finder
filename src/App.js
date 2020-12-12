import React, { Component } from 'react';
import  Searchbar from './Searchbar';
import  ImageGallery from './ImageGallery';


export default class App extends Component {
state = {
  searchImage: '',
};

// componentDidMount() {
//   fetch('https://pixabay.com/api/?q=dog&page=1&key=18396149-73dfa4d2cc3cf60487110b893&image_type=photo&orientation=horizontal&per_page=12')
//   .then(res => res.json())
//   .then(({hits}) => this.setState({searchImage: hits}))
// }

handleFormSubmit = searchImage => {
this.setState({searchImage})
}

  render() {
    return (
      <> 
      <Searchbar onSubmit = {this.handleFormSubmit} />
       <ImageGallery searchImage = {this.state.searchImage}/>
       </>
    );
  }
}
