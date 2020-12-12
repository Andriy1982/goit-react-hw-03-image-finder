import React, { Component } from 'react';
import './ImageGalleryItem.css'

export default class ImageGalleryItem extends Component {
  render() {
    return (
        <li className="ImageGalleryItem">
        <img src={this.props.url} alt={this.props.user} className="ImageGalleryItem-image" />
      </li>
    );
  }
}