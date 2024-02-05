import React from 'react'

function Item(props) {
  return (
    <div>
        <div className="item h-[250px] w-[350px] bg-slate-200 rounded-lg hover:scale-[1.10] transition-transform duration-4000 cursor-pointer">
          <img className='h-[80%] w-[100%]' src={props.image} alt="" />
          <h2 className='font-bold text-lg text-[#D62C03] mt-2 text-center'>{props.name}</h2>
        </div>
    </div>
  )
}

export default Item