import React from 'react';

function App() {
  return (
    <div className="App">
      getLanguageAPI() {
        fetch(http://api.languagelayer.com/detect?access_key=b9478dbdb301892dc09ea0c6fbd6c870)
        .then(res => res.json())
        .then((data)=> {
          this.setState({language: data})
        })
        .catch(console.log)
      }

      <header className="App-header">
        <p>
          Header
        </p>
      </header>
      <div>
        What up
      </div>
      <div>
        this is a test for ben
      </div>
    </div>
  );
}

export default App;
