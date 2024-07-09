import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import { FaShoppingCart } from 'react-icons/fa';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const products =  [
      { id: 1, name: 'Coral Linen Shirt', category: 'Boys Topwear', price: 300, discount: 20, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15255073a.webp' },
      { id: 2, name: 'Pink Ruffle Top', category: 'Girls Topwear', price: 400, discount: 30, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15489345a.webp' },
      { id: 3, name: 'Pink Walking Shoes', category: 'Footwear', price: 500, discount: 10, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16109392a.webp' },
      { id: 4, name: 'Toy for Toddlers', category: 'Toys', price: 600, discount: 40, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/3262003a.webp' },
      { id: 5, name: 'Hair Pins', category: 'Accessories', price: 700, discount: 50, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13729052a.webp' },
      { id: 6, name: 'Blue T-shirt', category: 'Boys Topwear', price: 350, discount: 35, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/10216894b.jpg' },
      { id: 7, name: 'Multicolor top', category: 'Girls Topwear', price: 450, discount: 45, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15935117a.webp' },
      { id: 8, name: 'Yellow Crocs', category: 'Footwear', price: 550, discount: 50, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15957693a.webp' },
      { id: 9, name: 'Toy', category: 'Toys', price: 650, discount: 55, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/13353030a.webp' },
      { id: 10, name: 'Hair Bow', category: 'Accessories', price: 750, discount: 60, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/17381010a.webp' },
      { id: 11, name: 'Boys Yellow Topwear ', category: 'Boys Topwear', price: 400, discount: 60, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13901366a.webp' },
      { id: 12, name: 'Girls Topwear Combo', category: 'Girls Topwear', price: 500, discount: 70, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16024113a.webp' },
      { id: 13, name: 'Red Sandals', category: 'Footwear', price: 600, discount: 80, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16113884a.webp' },
      { id: 14, name: 'Magnetic Connectors', category: 'Toys', price: 700, discount: 90, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/15779201a.webp' },
      { id: 15, name: 'Watch', category: 'Accessories', price: 800, discount: 100, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14335836a.webp' },
      { id: 16, name: 'Polo T-shirt', category: 'Boys Topwear', price: 450, discount: 65, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16450597a.webp' },
      { id: 17, name: 'Pink Lace Top', category: 'Girls Topwear', price: 550, discount: 75, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15955970a.webp' },
      { id: 18, name: 'Pink Crocs', category: 'Footwear', price: 650, discount: 85, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16158196a.webp' },
      { id: 19, name: 'Toy', category: 'Toys', price: 750, discount: 95, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/14745968a.webp' },
      { id: 20, name: 'Sports Watch', category: 'Accessories', price: 850, discount: 105, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13977449a.webp' },
      { id: 21, name: 'Tshirt', category: 'Boys Topwear', price: 320, discount: 25, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16478219a.webp' },
      { id: 22, name: 'Tshirt', category: 'Girls Topwear', price: 420, discount: 35, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16130977a.webp' },
      { id: 23, name: 'Black Shoes', category: 'Footwear', price: 520, discount: 15, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13978118a.webp' },
      { id: 24, name: 'Alphabet Toy', category: 'Toys', price: 620, discount: 45, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/2611411a.webp' },
      { id: 25, name: 'Sunglasses', category: 'Accessories', price: 720, discount: 55, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12745240a.webp' },
      { id: 26, name: 'Blue Shirt', category: 'Boys Topwear', price: 370, discount: 40, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15424677a.webp' },
      { id: 27, name: 'Green Top', category: 'Girls Topwear', price: 470, discount: 50, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/10438263a.webp' },
      { id: 28, name: 'Footwear', category: 'Footwear', price: 570, discount: 55, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/14298609a.webp' },
      { id: 29, name: 'Animal Toy', category: 'Toys', price: 670, discount: 60, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/11918372a.webp' },
      { id: 30, name: 'Sunglasses', category: 'Accessories', price: 770, discount: 65, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12745258a.webp' },
      { id: 31, name: 'Blue and Red Shirt', category: 'Boys Topwear', price: 420, discount: 70, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16316879a.webp' },
      { id: 32, name: 'White Top', category: 'Girls Topwear', price: 520, discount: 80, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/10438360a.webp' },
      { id: 33, name: 'Footwear', category: 'Footwear', price: 620, discount: 90, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/16088696a.webp' },
      { id: 34, name: 'Slide', category: 'Toys', price: 720, discount: 100, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/10690531a.webp' },
      { id: 35, name: 'Sunglass', category: 'Accessories', price: 820, discount: 110, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12745244a.webp' },
      { id: 36, name: 'Blue Raincoat', category: 'Boys Topwear', price: 470, discount: 75, age: 5, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/15915677a.webp' },
      { id: 37, name: 'Girls Top', category: 'Girls Topwear', price: 570, discount: 85, age: 6, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/10585933a.webp' },
      { id: 38, name: 'Casual Shoes', category: 'Footwear', price: 670, discount: 35, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/17528369a.webp' },
      { id: 39, name: 'Snake and Ladder', category: 'Toys', price: 770, discount: 10, age: 8, image: 'https://cdn.fcglcdn.com/brainbees/images/products/219x265/9597719a.webp' },
      { id: 40, name: 'Accessory', category: 'Accessories', price: 870, discount: 15, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12674521a.webp' },
      { id: 41, name: 'Sunglass', category: 'Accessories', price: 770, discount: 65, age: 9, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12745258a.webp' },
      { id: 42, name: 'School SHoes', category: 'Footwear', price: 520, discount: 15, age: 7, image: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13978118a.webp' },
  ];
  
  

    const addToCart = (product) => {
        const exists = cartItems.find(x => x.id === product.id);
        if (exists) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : x));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        const exists = cartItems.find(x => x.id === product.id);
        if (exists.quantity === 1) {
            setCartItems(cartItems.filter(x => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exists, quantity: exists.quantity - 1 } : x));
        }
    };

    return (
        <Router>
            <div className="app">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/cart" className="cart-link">
                     Cart <FaShoppingCart className="cart-icon" />
                    </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<ProductPage products={products} addToCart={addToCart} />} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
