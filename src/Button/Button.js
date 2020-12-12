import React from 'react'
import './Button.css'

export default function Button({clickLoadMoreButton}) {
  
    return (
        <button className = "Button" type='button' onClick = {clickLoadMoreButton} >
            Load more
        </button>
    )
}
