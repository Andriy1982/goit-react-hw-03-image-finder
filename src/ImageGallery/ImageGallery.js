import React, { Component } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

export default class ImageGallery extends Component {
  state = {
    images: '',
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.searchImage);
    console.log(this.props.searchImage);

    if (prevProps.searchImage !== this.props.searchImage) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchImage}&page=${this.state.currentPage}&key=18396149-73dfa4d2cc3cf60487110b893&image_type=photo&orientation=horizontal&per_page=5`,
      )
        .then(res => res.json())
        .then(({ hits }) => this.setState(prevState => ({
         images: [...prevState.images, ...hits] ,
         currentPage: prevState.currentPage + 1
        })))
    }
  }

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.state.images &&
            this.state.images.map(({ id, webformatURL, user }) => (
              <ImageGalleryItem key={id} url={webformatURL} user={user} />
            ))}
        </ul>
        <Button />
      </>
    );
  }
}
