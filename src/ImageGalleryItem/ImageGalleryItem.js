import React, { Component } from 'react';
import './ImageGalleryItem.css'

import Modal from '../Modal'

export default class ImageGalleryItem extends Component {

state = {showModal: false,}

toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
}

  render() {
    return (
      <>
        <li className="ImageGalleryItem">
        <img 
        src={this.props.url} 
        alt={this.props.user}
        onClick= {this.toggleModal} 
        className="ImageGalleryItem-image" />
      </li>
       {this.state.showModal && 
          <Modal onClose={this.toggleModal}>
          <img 
          className="ImageModal"
        src={this.props.showModal} 
        alt={this.props.user}
        // width= {800}
        // height= {600}
        />
        </Modal>
       }
      </>
    );
  }
}