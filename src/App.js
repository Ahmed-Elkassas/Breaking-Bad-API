import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import CharacterGrid from './component/characters/CharacterGrid';
import Search from './component/Search';

import axios from 'axios';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
      const fetchData = async () => {
          const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
          // console.log(res.data);

          setItems(res.data);
          setLoading(false);
      }

      fetchData();
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search  getQuery={(q) => setQuery(q)}/>
      <CharacterGrid loading={loading} items={items} />
    </div>
  );
}

export default App;
