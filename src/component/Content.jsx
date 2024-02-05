import React from 'react'

function Content(props) {
  return (
    <div>
        <img className='h-[60vh]' src={props.image} alt="" />
        <h1>{props.name}</h1>
    </div>
  )
}

export default Content