import React, { Component } from 'react';

class Api extends Component {
    state = {
        data: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=React&format=json&origin=*";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data } = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });

        return (
          <div>
            <h2>Fetched from Wikipedia API</h2>
            <ul>{result}</ul>
          </div>
        );
    }
}

export default Api;
