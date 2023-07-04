import React from 'react'
import './Search.css'

function Search({topic, setTopic, setResults}) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const BACKEND_API_BASE_ENDPOINT = 'https://backend-api.auroraaa.me';
          const FINAL_URL = BACKEND_API_BASE_ENDPOINT + '/search';
          console.log(FINAL_URL);
          console.log(BACKEND_API_BASE_ENDPOINT);
          const response = await fetch(FINAL_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ topic })
          });
          const data = await response.json();
          setResults(data.results.map(result => ({ ...result, copied: false })));
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <div><form onSubmit={handleSubmit}>
    <input
      type="text"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      placeholder="Enter a topic"
    />
    <button type="submit">Search</button>
  </form></div>
  )
}

export default Search