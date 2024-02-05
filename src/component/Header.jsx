import React, { useState } from 'react'
import { logo } from './constants'
import NavItem from './NavItem';

function Header() {

    const [menu,setMenu]=useState("Home");
    const items=["Home","Buisness","Entertaiment","General","Health","Science","Sports","Technology"];

  return (
    <div className='flex justify-around  w-[100vw] h-[10vh] items-center shadow-lg'>
        <div className="logo h-[100%] flex ">
            <img className='w-16' src={logo} alt="" />
            <div className="name">
                <p className='font-bold tracking-wider text-xl'>News</p>
                <p className='font-bold tracking-wider text-xlx'>Bird</p>
            </div>
        </div>
        <div className="nav flex gap-14 ">
            {items.map((item,index)=>{
                console.log(item);
                return <NavItem onClick={()=>setMenu(item)} key={index} name={item} value={menu} />
            })}
            
        </div>
    </div>
  )
}

export default Header