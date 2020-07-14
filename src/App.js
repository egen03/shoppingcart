import React, { useState } from 'react';
import './App.css';


function App() {

// initalize cart
  const [cart, setCart] = useState([]);

// List all items in store
  const [items] = useState([
  {
    name: 'iPhone',
    cost: '$1000',
    img: 'iphone.jpeg'
  }, 
  {
    name: 'iPad',
    cost: '$650',
    img: 'ipad.jpeg'
  }
]);

// function to add item to cart

const addToCart = (items) => {
  console.log('Item added to cart')
  setCart([...cart, items]);
};

// function to remove item from cart. Use .filter 
const removeFromCart = (itemsToRemove) => {
  console.log('Item removed from cart')
  setCart(
    cart.filter((items) => items !== itemsToRemove)
  );
}

// function to get cart total. use .reduce 
const cartTotal = () => {
  return cart.reduce(
    (sum, { cost }) => (sum + cost)  , 0); 
};

// =====================================

  return (
    <div className="App">
      <h1>Erica's Store</h1>

      <header>
        <button>My Cart ({cart.length})</button>
      </header>

    

    <div className="items">
      {items.map((items) => (
        <div className="product">
          <h3>{items.name}</h3>
          <h4>{items.cost}</h4>
          <img src={items.img} alt={items.name} /><br /><br/>
          <div id="cartButtons">
          <button onClick={() => addToCart(items)}>Add to Cart</button>
          &nbsp; &nbsp;
          <button onClick={() => removeFromCart(items)}>Remove Item</button>
          </div>
        </div>
      ))}
    </div>
      
    <div>
      <h3>Cart total: {cartTotal()} </h3>
       
    </div>


    </div>
    
  );
}

export default App;
