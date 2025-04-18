import React from "react";
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  if (!setCart) {
    console.error("setCart is undefined in Cart component!");
    return null;
  }

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center my-4" style={{ fontWeight: "bold" }}>
        Your Shopping Cart
      </h1>
  
      {cart.length === 0 ? (
        <h3 className="text-center">Cart is empty</h3>
      ) : (
        <div className="cart-container">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h5>{item.name}</h5>
              </div>
              <div className="cart-item-quantity">
                <button className="btn btn-outline-danger" onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>
                <span className="mx-2">x{item.quantity}</span>
                <button className="btn btn-outline-success" onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>
              <div className="cart-item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
  
          <div className="cart-total text-end">
            Total: <span className="text-danger">₹{totalAmount.toFixed(2)}</span>
          </div>
  
          <div className="cart-buttons">
            <button className="btn " onClick={clearCart}>Clear Cart</button>
            <button className="btn ">Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
  
  
};

export default Cart;
