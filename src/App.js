
import './App.css';
import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/searchbox/search-box.component';




class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }


  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
