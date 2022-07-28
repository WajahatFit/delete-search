import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import productData from './products.json';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete = (id) => {
    const filtered = products.filter(elem => elem._id !== id);
    setProducts(filtered);
  }

  const handleSearch = (SearchValue) => {
    if(SearchValue === ''){
      setProducts(productData);
    }else {
      const filter = products.filter(elem => elem.name.toLowerCase().includes((SearchValue).toLowerCase()));
      setProducts(filter)
    }
  }

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <SearchBar onSearch={handleSearch} />
      {products.map(elem => {
        return (
          <div>
          <ProductCard key={elem._id} onDelete={handleDelete} info={elem}/>
          
          </div>
        )
      })}
      </div>
  );
}

export default App;
