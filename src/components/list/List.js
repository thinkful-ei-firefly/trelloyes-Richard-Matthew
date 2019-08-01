import React from 'react';
import Card from '../card/Card';
import './list.css';

function List({listId, header, cards,handleAddCard, handleDelete}) {

    return (
    <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">
            {cards.map(card => <Card
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                content={card.content}
                                handleDelete={handleDelete}/>)}
        <button type="button" onClick={() => handleAddCard(listId)}>Add Card</button>
        </div>
    </section>);
}

export default List;

