import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(
        { response: res.payload }
      ))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="api-test">
          {this.state.response}
        </div>
      </div>
    );
  }
}

export default App;

