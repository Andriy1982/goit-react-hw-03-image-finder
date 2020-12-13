import React, { Component } from 'react';
import './ImageGallery.css';

import ImageGalleryItem from '../ImageGalleryItem';


// import imagesApi from '../Services/images-api'

export default class ImageGallery extends Component {
//   state = {
//     images: '',
//     currentPage: 1,
//   };

 

  render() {
      console.log(this.props);
      const {images, onShowModal} = this.props
    return (
    
        <ul className="ImageGallery" >
          {images &&
            images.map(({ id, webformatURL, user, largeImageURL }) => (
              <ImageGalleryItem key={id} url={webformatURL} user={user} showModal = {largeImageURL} />
            ))}
        </ul>   
      
    );
  }
}
