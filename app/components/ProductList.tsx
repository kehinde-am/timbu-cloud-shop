import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Oppo Reno11 F 5G',
    price: 350000.00,
    image: '/images/Rectangle 32.png',
    rating: 4.9,
    reviews: 102
  },
 {
    name: 'Oppo Reno 8',
    price: 230000.00,
    image: '/images/Rectangle 33.png',
    rating: 4.7,
    reviews: 78
 },
 {
    name: 'Oppo Reno11  5G',
    price: 300000.00,
    image: '/images/Rectangle 34.png',
    rating: 4.5,
    reviews: 90
 },
 {
    name: 'Oppo Enco  W11',
    price: 50000.00,
    image: '/images/Rectangle 35.png',
    rating: 4.7,
    reviews: 100
 },
 {
    name: 'Oppo Reno 7',
    price: 200000.00,
    image: '/images/Rectangle 36.png',
    rating: 4.0,
    reviews: 67
 },
 {
    name: 'Oppo A78',
    price: 174000.00,
    image: '/images/Rectangle 37.png',
    rating: 4.2,
    reviews: 52
 },
 {
    name: 'Oppo Enco W31',
    price: 90000.00,
    image: '/images/Rectangle 38.png',
    rating: 4.9,
    reviews: 12
 },
 {
    name: 'Oppo A77s',
    price: 165000.00,
    image: '/images/Rectangle 39.png',
    rating: 3.8,
    reviews: 10
 },
 {
    name: 'Oppo A58',
    price: 158000.00,
    image: '/images/Rectangle 40.png',
    rating: 3.7,
    reviews: 34
 },
 {
    name: 'Oppo A38',
    price: 145000.00,
    image: '/images/Rectangle 41.png',
    rating: 3.5,
    reviews: 7
 },
 {
    name: 'Oppo A17k',
    price: 130000.00,
    image: '/images/Rectangle 42.png',
    rating: 3.7,
    reviews: 2
 },
 {
    name: 'Oppo A16',
    price: 97000.00,
    image: '/images/Rectangle 43.png',
    rating: 4.5,
    reviews: 58
 },
];

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
