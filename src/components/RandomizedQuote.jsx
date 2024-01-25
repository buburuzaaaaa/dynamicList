import React, { useState, useEffect } from 'react';

const RandomizedQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleRefresh = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent container
    fetchRandomQuote();
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`quote-container ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <div className="quote-content">
        <h2>Random Quote</h2>
        {expanded && (
          <div className="quote-details">
            <h3>{quote}</h3>
            <p>{author}</p>
            <button onClick={handleRefresh}>New Quote</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomizedQuote;
