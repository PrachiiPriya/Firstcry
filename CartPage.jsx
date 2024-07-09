import React from 'react';

const CartPage = ({ cartItems, addToCart, removeFromCart }) => {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <div>No items in the cart</div>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: Rs {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item)}>-</button>
                            <button onClick={() => addToCart(item)}>+</button>
                        </div>
                    ))
                )}
            </div>
            <div className="total-price">
                <h3>Total: Rs {totalPrice}</h3>
            </div>
        </div>
    );
};

export default CartPage;
