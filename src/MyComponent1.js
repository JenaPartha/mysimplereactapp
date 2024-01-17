// src/MyComponent.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating an asynchronous data fetch
    const fetchData = async () => {
      const response = await fetch('https://myone-fauq.onrender.com/abc');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return <div>{data}</div>;
};

export default MyComponent;
