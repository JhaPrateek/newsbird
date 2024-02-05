import React, { useState } from 'react'

function NavItem(props) {

    const [menu,setMenu]=useState("");

  return (
    <div>
        <div  onClick={props.onClick} className={`font-semibold ${props.value === props.name? 'border-b-2 border-blue-500' : '' } cursor-pointer`}>{props.name}</div>
    </div>
  )
} 

export default NavItem