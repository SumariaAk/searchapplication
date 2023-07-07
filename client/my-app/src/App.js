import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [topic, setTopic] = useState(''); // State for storing the topic entered by the user
  const [results, setResults] = useState([]); // State for storing the search results

  return (
    <div className="App">
      <Header/ > {/* Render the Header component */}
      <div className="search-container">
        <Search topic={topic} setTopic={setTopic} setResults={setResults} /> {/* Render the Search component and pass props */}
      </div>
      <Result results={results} setResults={setResults} /> {/* Render the Result component and pass props */}
    </div>
  );
}

export default App;
