import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Ui/Header';
import Search from './components/Ui/Search';
import CharacterItems from './components/Characters/CharacterItem';

const App = () => {
  const [chars, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search_API = async () => {
      setLoading(true);
      const response = await axios (
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      
      setChar(response.data);
      setLoading(false);
    }

    search_API();
  }, [query]);

  return(
    <>
      <div className="header">
        <Header />
        <Search getQuery={(q) => setQuery(q)}/>
      </div>
      <div className="container">
        <CharacterItems loading={loading} items={chars}/>
      </div>
    </>
  );
}

export default App;
