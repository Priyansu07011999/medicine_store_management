import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue-500 text-white p-4">
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
};

export default Header