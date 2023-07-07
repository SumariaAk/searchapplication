import React from 'react'
import clipboardCopy from 'clipboard-copy';
import './Result.css'

function Result({results, setResults}) {

    const handleCopyToClipboard = (text, index) => {
        clipboardCopy(text); // Copy the text to the clipboard
        setResults(prevResults => {
            const updatedResults = [...prevResults];
            updatedResults[index].copied = true; // Set the copied state to true for the clicked result
            return updatedResults;
        });
        };
  return (
    <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result">
            <div className="result-box">
              <h2>{result.title}</h2>
              <a href={result.link}>{result.link}</a>
              <p>{result.snippet}</p>
              <button
                className={`copy-button ${result.copied ? 'copied' : ''}`}
                onClick={() => handleCopyToClipboard(result.snippet, index)}
              >
                {result.copied ? 'Copied' : <i className="far fa-copy"></i>}
                {/* {result.copied ? ' Copied' : ' Copy Content'} */}
              </button>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Result