const axios = require('axios');

module.exports.search = async (event) => {
  const { topic } = JSON.parse(event.body);

  try {
    // Perform the search using your preferred search API or library
    const searchResults = await performSearch(topic);

    // Extract relevant information from the search results
    const extractedResults = extractInformation(searchResults);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Headers': 'Content-Type', // Allow the Content-Type header
      },
      body: JSON.stringify({
        results: extractedResults,
      }),
    };
  } catch (error) {
    console.error('Error occurred while performing search:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Headers': 'Content-Type', // Allow the Content-Type header
      },
      body: JSON.stringify({
        error: 'An error occurred while performing the search.',
      }),
    };
  }
};

// Function to perform the search using the search API or library
async function performSearch(topic) {
  const apiKey = process.env.API_KEY;
  const cx = process.env.CX;

  try {
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: apiKey,
        cx: cx,
        q: topic,
        safe: 'high', // Set the safe parameter to 'high' for strict safe search
      },
    });

    const searchResults = response.data.items;
    return searchResults;
  } catch (error) {
    console.error('Error occurred while performing search:', error);
    throw new Error('An error occurred while performing the search.');
  }
}


// Function to extract relevant information from the search results
function extractInformation(searchResults) {
  const extractedResults = [];

  // Limit the search results to the top 20 results or the available results, whichever is smaller
  const limit = Math.min(searchResults.length, 10);

  for (let i = 0; i < limit; i++) {
    const result = searchResults[i];

    const extractedInfo = {
      title: result.title,
      link: result.link,
      snippet: result.snippet,
      copied: false,
    };

    extractedResults.push(extractedInfo);
  }

  return extractedResults;
}
