import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';


import imagesApi from './Services/images-api'


export default class App extends Component {
state = {
  images: [],
  currentPage: 1,
  searchImage: '',
  isLoading: false,
};

componentDidUpdate(prevProps, prevState) {
  console.log(prevState.searchImage);
  console.log(this.state.searchImage);

  if (prevState.searchImage !== this.state.searchImage) {
    
      this.fetchImages();
  }

  if (this.state.images.length !==  prevState.images.length) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
}

handleFormSubmit = searchImage => {
this.setState({searchImage, currentPage: 1, images: []})
}

showModal = (url) => {
  console.log(url);
 
}

fetchImages = ()  => {
  const {searchImage, currentPage} = this.state;
  this.setState({isLoading: true})
  // setTimeout(() => {
    imagesApi
    .fetchImages(searchImage, currentPage)
    .then(({ hits }) => this.setState(prevState => ({
     images: [...prevState.images, ...hits] ,
     currentPage: prevState.currentPage + 1,
     isLoading: false,
    }))
    )
  // }
  // , 2000)
 
}

  render() {
    const {images, isLoading} = this.state
    return (
      <> 
      <Searchbar onSubmit = {this.handleFormSubmit} />
     
       <ImageGallery images = {images} onShowModal = {this.showModal}/>
       { isLoading && <Loader style= {{textAlign: 'center',}}
       type="ThreeDots" color="#00BFFF" height={80} width={80}
        timeout={5000} //3 secs
      />}
       {images.length > 0 && !isLoading && <Button onClickButton={this.fetchImages}/>}
      
       </>
    );
  }
}
