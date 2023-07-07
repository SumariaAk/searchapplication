import React from 'react'
import './Search.css'

function Search({topic, setTopic, setResults}) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Define the backend API base endpoint and the final search URL
          const BACKEND_API_BASE_ENDPOINT = 'https://backend-api.auroraaa.me';
          const FINAL_URL = BACKEND_API_BASE_ENDPOINT + '/search';

          // Log the final URL and backend API base endpoint for debugging purposes
          console.log(FINAL_URL);
          console.log(BACKEND_API_BASE_ENDPOINT);

          // Send a POST request to the backend API with the entered topic
          const response = await fetch(FINAL_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ topic })
          });

          // Parse the response and update the search results state
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