import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './Components/Header'
import Characters from './Components/Characters'
import Search from './Components/Search'
import './App.css';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      setItems(result.data);
      setIsLoading(false); 
    }

    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;