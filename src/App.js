import React from 'react';
import List from './components/list/List';
import './app.css';

class App extends React.Component {

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }

  handleDelete = (cardId) => {
    this.setState ({
      lists:    this.state.lists.map(list =>({...list, cardIds: list.cardIds.filter(id => id !== cardId)})),
      cardIds:  this.omit(this.state.allCards, cardId)
    })
  }

  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleAddCard = (listId) => {
    const newCard = this.newRandomCard();
    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
	      return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })
    this.setState ({
      lists: newLists,
      allCards: { ...this.state.allCards, [newCard.id]: newCard}
    })
  }

  createList(list) {
    const cardList = [];
    list.cardIds.forEach(id => {
      if (this.state.allCards[id]) {
        cardList.push(this.state.allCards[id]);
      }
    });
    return <List 
              key={cardList.id}
              listId={list.id}
              header={cardList.header}
              cards={cardList}
              handleAddCard={this.handleAddCard} 
              handleDelete={this.handleDelete}/>;
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((list) => this.createList(list))}
        </div>
      </div>
    );
  }
}

export default App;