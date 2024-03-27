import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    const addToCart = (item) => {
        // check if the item is already in the cart
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    // otherwise, return the cart item
                    : cartItem
                )
            );
            return { success: true, message: "Item quantity increased in cart." };
        } else {
            // if the item is not in the cart, add the item to the cart
            setCartItems([...cartItems, { ...item, quantity: 1 }])
            return { success: true, message: "Item added to cart." };
        }
    }

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            // if the quantity of the item is 1, remove the item from the cart
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id === item.id
                    // if the quantity of the item is greater than 1, decrease the quantity of the item
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        }
    }

    const deleteItem = (item) => {
        // remove all instances of the item from the cart
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    }

    const clearCart = () => {
        // set the cart items to an empty array
        setCartItems([]);
    }

    const getCartTotal = () => {
        // calculate the total price of the items in the cart
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const getTotalQuantity = () => {
        // calculate the total quantity of items in the cart
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    useEffect(() => {
        console.log("Updating local storage with cartItems:", cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        console.log("Retrieving cartItems from local storage");
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                getTotalQuantity,
                deleteItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider }