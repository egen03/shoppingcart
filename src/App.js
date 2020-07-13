import React, { useState } from 'react';

import './App.css';


function App() {

  const [cart, setCart] = useState([]);

  const [items] = useState([
  {
    name: 'iPhone',
    cost: '$999.99',
    img: 'iphone.jpeg'
  },
  {
    name: 'iPad',
    cost: '$649.99',
    img: 'ipad.jpg'
  }
]);

// function to add item to cart

const addToCart = (items) => {
  console.log('Item added to cart')
  setCart([...cart, items]);
};



  return (
    <div className="App">
      <h1>Items</h1>

      <header>
        <button>My Cart ({cart.length})</button>
      </header>

    <div className="items">
      {items.map((items) => (
        <div className="product">
          <h3>{items.name}</h3>
          <h4>{items.cost}</h4>
          <img src={items.img} alt={items.name} /><br /><br/>
          <button onClick={() => addToCart(items)}>Add to Cart</button>
        </div>
     
      
      ))}
    </div>
      
    </div>
    
  );
}

export default App;
