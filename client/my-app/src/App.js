import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Header/ >
      <div className="search-container">
        <Search topic={topic} setTopic={setTopic} setResults={setResults} />
      </div>
      <Result results={results} setResults={setResults} />
    </div>
  );
}

export default App;

