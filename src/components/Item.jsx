import React from 'react'
import "./Item.css"
function Item({data,remove}) {

    return (
        <>
        <li className='my-2 p-2 text-white item bg-success'>
                <p>ID: <span>{data.id}</span></p>
                <p>NAME: <span>{data.name.toUpperCase()}</span></p>
                <p>TYPE: <span>{data.title.toUpperCase()}</span></p>
                <button className='btn btn-danger item__btn' onClick={()=>remove(data)}>DELETE</button>
            </li>
        </>
    )
}

export default Item
