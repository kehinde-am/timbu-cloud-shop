import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
    <Header/>
      <ProductList />
      </div>
  );
}

export default HomePage;
