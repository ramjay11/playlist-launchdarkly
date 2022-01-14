import React, {Component} from 'react';
import './App.css';

class App extends Component {
  // Hard coded data
  constructor() {
    super()
    this.state = {
      songs: [
        {name: 'Swasti-ska', added: '2022-01-15'},
        {name: 'Auftrag Deutsches Reich', added: '2022-01-14'},
      ]
    }
  }
  render() {
  return (
    <div className="App">
      <ul>
        {this.state.songs.map(song =>
              <li>{song.name}</li>
          )}
        <li>Title 1</li>
        <li>Title 2</li>
        <li>Title 3</li>
      </ul>
    </div>
  );
  }
}

export default App;
