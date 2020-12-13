import React from 'react'
import './Button.css'

export default function Button({onClickButton}) {
  
    return (
        <button className = "Button" type='button' onClick = {onClickButton} >
            Load more
        </button>
    )
}
