import React, { useState } from 'react';
import './App.css';


function App() {

  const [cart, setCart] = useState([]);

  const [items] = useState([
  {
    name: 'iPhone',
    cost: 999.99,
    img: 'https://unsplash.com/photos/z3kBG5xIhjo'
  },
  {
    name: 'iPad',
    cost: 649.99,
    img: 'ipad.jpeg'
  }
]);

// function to add item to cart

const addToCart = (items) => {
  console.log('Item added to cart')
  setCart([...cart, items]);
};

const removeFromCart = (itemsToRemove) => {
  console.log('Item removed from cart')
  setCart(
    cart.filter((items) => items !== itemsToRemove)
  );
}

const cartTotal = () => {
  return items.reduce((sum, { cost }) => sum + cost, 0) 
}



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
          <h4>${items.cost}</h4>
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
