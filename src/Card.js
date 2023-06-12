import React from 'react'

const Card = ({title,img,description,price}) => {
  return (
    <article className="card">
      <div className="menuItemTitle">
        <h2> {title} </h2>
      </div>
      <div className="menuItemImage">
        <img src={img} />
      </div>
      <p>{description}</p>
      <ul className='addCart'>
        <li>Price: {price} ea</li>
        <li><button> Add To Cart</button></li>
      </ul>
    </article>
  );
}

export default Card