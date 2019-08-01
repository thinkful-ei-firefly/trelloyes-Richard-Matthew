import React from 'react';
import './card.css';

function Card({id, title, content, handleDelete}) {
  return (
    <div className="Card">
    <button type="button" onClick={() => handleDelete(id)}>delete</button>
    <h3>{title}</h3>
    <p>{content}</p>
    </div>)
};

export default Card;