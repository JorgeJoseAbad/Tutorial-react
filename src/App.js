import React,{Component} from 'react';
import Table from './Table';
import Form from './Form';
import Api from './Api'

class App extends Component {
  state = {
   characters: []
};

  removeCharacter = (index) => {
      const { characters } = this.state;

      this.setState({
          characters: characters.filter((character, i) => {
              return i !== index;
          })
      });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}


    render() {

        return (
            <div className="container">
              <h1>React Tutorial</h1>
              <h3>Courtesy of <a href="https://www.taniarascia.com/" target="_blank">Tania Rascia</a></h3>
              <pre>A table of data, a form to load this table, and data downloaded from an API</pre>
              <Table
                characters={this.state.characters}
                removeCharacter={this.removeCharacter}
              />
              <Form handleSubmit={this.handleSubmit}/>
              <Api />
            </div>
        );
    }
}

export default App;
