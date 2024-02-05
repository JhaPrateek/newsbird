import React, { useEffect, useState } from 'react'
import { api } from './constants'
import Item from './Item';


function Hero() {

    const [data,setData]=useState([]);

   const apiUrl=async ()=>{
        const data=await fetch(api);
        const json=await data.json();
        setData(json.articles);
       // console.log(json.articles);
   }
   
   useEffect(()=>{
        apiUrl()
   },[])

  return (
    <div className='w-[80vw] m-auto grid grid-cols-3 gap-10 items-center justify-center mt-7 max-w-[100vw]'>
          {data.map((item)=>{
               return <Item image={item.urlToImage} id={item.source.id} name={item.source.name} />
          })}
    </div>
  )
}

export default Hero