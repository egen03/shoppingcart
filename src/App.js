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

const removeFromCart = (itemsToRemove) => {
  console.log('Item removed from cart')
  setCart(
    cart.filter((items) => items !== itemsToRemove)
  );
}


function Footer (props) {
  return <h2>{props.total}</h2>
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
          <h4>{items.cost}</h4>
          <img src={items.img} alt={items.name} /><br /><br/>
          <div id="cartButtons">
          <button onClick={() => addToCart(items)}>Add to Cart</button> 
          <button onClick={() => removeFromCart(items)}>Remove Item</button>
          </div>
        </div>
      ))}
    </div>
      
    {/* <div>
        <button onClick={() => removeFromCart(items)}>Remove Item</button>
      </div> */}

    <div>
      <h3>Cart total: </h3>
      <Footer total={items.reduce((a, items) => (a + items.price * items.count), 0)} />
    </div>


    </div>
    
  );
}

export default App;
