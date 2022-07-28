import React from 'react'

export default function ProductCard(props) {
    const {info:{name, price, _id}, onDelete} = props
  return (
    <div>
    <p>{name}</p>
    <h2>{price}$</h2>
    <button onClick={ () => onDelete(_id)}>🗑</button>
    </div>
  )
}
