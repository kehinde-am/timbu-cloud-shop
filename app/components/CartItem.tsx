import React from 'react';
import Image from 'next/image';

interface CartItemProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
  productNumber: string;
  color: string;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, image, quantity, productNumber, color, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Image src={image} alt={name} width={100} height={100} />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p>Product Number: {productNumber}</p>
          <p>Colour: <span className="text-yellow-500">●</span> {color}</p>
          <p>₦{price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={onDecrease} className="border px-2">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={onIncrease} className="border px-2">+</button>
      </div>
      <div className="text-xl font-bold">₦{(price * quantity).toLocaleString()}</div>
      <button onClick={onRemove} className="text-red-500">✕</button>
    </div>
  );
};

export default CartItem;
