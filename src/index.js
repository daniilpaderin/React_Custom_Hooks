import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function useDebounce(value, delay) {
  const [currentValue, setCurrentValue] = useState(null);

  useEffect(() => {
    let timerID = setTimeout(() => setCurrentValue(value), delay);
    return () => {
      clearTimeout(timerID);
    };
  });

  return currentValue;
}

function App() {
  const delay = 2000;
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, delay);

  const handleInputChange = event => setQuery(event.target.value);

  return (
    <div className="App">
      <input type="text" value={query} onChange={handleInputChange} />
      <p>Query: {query}</p>
      <p>Debounced Query: {debouncedQuery}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
