import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import './Blogs.css';

// Import fruit images
import p1 from './image/apple.png';
import p4 from './image/avocado.png';
import p5 from './image/banana.png';
import p10 from './image/dargon fruit.png';
import p11 from './image/fig.png';
import p12 from './image/grapes.png';
import p13 from './image/guava.png';
import p14 from './image/kiwi.png';
import p15 from './image/lemon.png';
import p16 from './image/mango.png';
import p17 from './image/mushmelon.png';
import p18 from './image/orange.png';
import p19 from './image/papaya.png';
import p20 from './image/peach.png';
import p24 from './image/peer.png';
import p25 from './image/sapota.png';
import p26 from './image/straberry.png';
import p28 from './image/watermelon.png';
import p21 from './image/pineapple.png';
import p22 from './image/pomogranet.png';

// Import vegetable images
import v1 from './image/Asparagus.png';
import v8 from './image/ABC.png';
import v2 from './image/beetroot.png';
import v3 from './image/bell pepper.png';
import v4 from './image/carrot.png';
import v5 from './image/cucumber.png';
import v6 from './image/pumkin.png';
import v7 from './image/tomato.png';

// Fruits data
const products = [
  { id: 1, name: 'Apple', price: 100, image: p1 },
  { id: 2, name: 'Avocado', price: 120, image: p4 },
  { id: 3, name: 'Banana', price: 50, image: p5 },
  { id: 4, name: 'Dragon Fruit', price: 135, image: p10 },
  { id: 5, name: 'Fig', price: 150, image: p11 },
  { id: 6, name: 'Grapes', price: 65, image: p12 },
  { id: 7, name: 'Guava', price: 75, image: p13 },
  { id: 8, name: 'Kiwi', price: 155, image: p14 },
  { id: 9, name: 'Lemon', price: 45, image: p15 },
  { id: 10, name: 'Mango', price: 85, image: p16 },
  { id: 11, name: 'Muskmelon', price: 80, image: p17 },
  { id: 12, name: 'Orange', price: 60, image: p18 },
  { id: 13, name: 'Papaya', price: 70, image: p19 },
  { id: 14, name: 'Peach', price: 100, image: p20 },
  { id: 15, name: 'Pear', price: 75, image: p24 },
  { id: 16, name: 'Sapota', price: 45, image: p25 },
  { id: 17, name: 'Strawberry', price: 170, image: p26 },
  { id: 18, name: 'Watermelon', price: 45, image: p28 },
  { id: 19, name: 'Pineapple', price: 130, image: p21 },
  { id: 20, name: 'Pomegranate', price: 160, image: p22 },
];

// Vegetables data
const vegetables = [
  { id: 28, name: 'ABC', price: 90, image: v8 },
  { id: 21, name: 'Asparagus', price: 90, image: v1 },
  { id: 22, name: 'Beetroot', price: 55, image: v2 },
  { id: 23, name: 'Bell Pepper', price: 80, image: v3 },
  { id: 24, name: 'Carrot', price: 60, image: v4 },
  { id: 25, name: 'Cucumber', price: 45, image: v5 },
  { id: 26, name: 'Pumpkin', price: 70, image: v6 },
  { id: 27, name: 'Tomato', price: 50, image: v7 },
];


const Blogs = ({ cart, setCart }) => {
  if (!setCart) {
    console.error("setCart is undefined! Make sure you're passing it from App.js");
    return null;  // Prevent further execution if setCart is missing
  }

  const addToCart = (product) => {
    const confirmation = window.confirm(`Do you want to add ${product.name} to your cart?`);
  
    if (confirmation) {
      const existingProduct = cart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
  
      alert(`${product.name} has been added to your cart!`);
    }
  };


  

  

  return (
    <div className="container mt-5">
      {/* Fruits Section */}
      <h1 className="text-center my-5" style={{ color: "#ffcc00" }}>FRUITS</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card" style={{ width: '100%' }}>
              <div className="image1">
                <img src={product.image} className="card-img-top" alt={product.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">250 gm</p>
                <p>
                  <span className="off">₹{Math.round(product.price * 1.12)}</span> |
                  <span className="off1">₹{product.price}</span> &nbsp;
                  <span className="off2">10% off</span>
                </p>
                <button className="btn" style={{ borderColor: "black" }} onClick={() => addToCart(product)}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vegetables Section */}
      <h1 className="text-center my-5" style={{ color: "#ffcc00" }}>VEGETABLES</h1>
      <div className="row">
        {vegetables.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
          <div className="card" style={{ width: '100%' }}>
              <div className="image1">
                <img src={product.image} className="card-img-top" alt={product.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">250 gm</p>
                <p>
                  <span className="off">₹{Math.round(product.price * 1.12)}</span> |
                  <span className="off1">₹{product.price}</span> &nbsp;
                  <span className="off2">10% off</span>
                </p>
                <button className="btn" style={{ borderColor: "black" }} onClick={() => addToCart(product)}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
