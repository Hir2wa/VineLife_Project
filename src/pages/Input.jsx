import React, { useReducer, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Checking(password) {}

const Input = () => {
  function cartReducer(state, action) {
    switch (cart.type) {
      case "check-item":
        const itemExists = state.cart.some(
          (cartItem) => cartItem.id === action.item.id
        );
        return {
          ...state,
          cart: itemExists
            ? state.cart.filter((item) => item.id !== action.item.id)
            : [...state.cart, action.item],
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  const kfcMenu = [
    { name: "Zinger Burger", price: 5.49 },
    { name: "Bucket of 8 Hot Wings", price: 7.99 },
    { name: "Original Recipe Chicken (2 Pieces)", price: 4.99 },
    { name: "Popcorn Chicken (Regular)", price: 3.49 },
    { name: "Chicken Sandwich Combo", price: 6.99 },
    { name: "Famous Bowl", price: 5.79 },
  ];

  return (
    <>
      <div className="flex">
        <div>
          <h1>KFC Menu</h1>
          <p>Menu items</p>{" "}
          {kfcMenu.map((data) => (
            <div className="flex flex-row ">
              <input
                type="checkbox"
                checked={state.cart.some((cartItem) => cartItem.id === data.id)}
                onChange={() => dispatch({ type: "check-item", item: data })}
              />
              <div>
                <h3>{data.name}</h3>
                <h3>{data.price}</h3>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div>
            <h3>Your Cart({state.cart.length} items)</h3>
            {state.cart.map((item) => (
              <div>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
