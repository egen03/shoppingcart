import React, { Component } from 'react';
import './App.css';

function Header(props){
  return <h1>Erica's Shopping Cart</h1>
}

// =============================================
// function Cart(props){
//   return <table>
//     <tr>
//       <th>Name</th>
//       <th>Quantity</th>
//       <th>Price</th>
//       <th>Total</th>
//     </tr>
//     {  
//     props.cartItems.map (item =>
//       <tr key={item.name}>
//       <td>{cart.name}</td>
//       <td>{cart.count}</td>
//       <td>{cart.price}</td>
//       <td>{cart.price * cart.count}</td>
//     </tr>)
//     }
//   </table>



// ===============================================
function Footer(props) {
  return <h2>{props.total}</h2>
}


// =================================================
class App extends Component {
  render() {
    const cartItems = [
      {name:'iPhone', count: 3, price: 1000},
      {name:'iPad', count: 2, price: 800},
      {name:'AirPods', count: 4, price: 250},
    ];

    return (
      <div className="App">
        <Header />
        <Cart cartItems={cartItems}/>
        <Footer total={cartItems.reduce((a,c) => (a + c.price * c.count), 0)} />
      </div>
    );
  }

};
  
export default App;
