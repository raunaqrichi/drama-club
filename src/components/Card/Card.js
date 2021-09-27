import React from 'react';
import './Card.css'

const Card = (props) =>{
  const {img, name, profession, age, salary, birthPlace} = props.card;
    return(
           <div className='cards'>  
        <img src={img} className='image' alt="..."/>
        <h5>{name}</h5>
          <p >Profession: {profession}</p>
          <p >Birth-place: {birthPlace}</p>
          <p >Age: {age}</p>
          <p>Salary: ${salary}</p>
          
       <button onClick={() => props.handleAddToList(props.card)} className='btn btn-secondary'><i className="fas fa-shopping-cart"></i> Add To List</button>
  </div>
    )
}

export default Card;