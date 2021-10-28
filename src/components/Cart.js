import React, { createContext, useReducer, useState,useEffect } from 'react'
import './cart.css'
import reducer from '../reducer';
import { products } from './Products';
import ContextCart from './ContextCart';

export const CartContext=createContext();
const initialState={
    item:products,
    totalAmount:0,
    totalItem:0
}

const Cart = () => {
    // const [item,setItem]=useState(products);
    const[state,dispatch]=useReducer(reducer,initialState);
    // To delete the individual elements from an item cart
    const removeItem=(id)=>{
   return dispatch({
       type:"REMOVE_ITEM",
       payload:id
   })
    }
    //clear the cart
    const clearCart=()=>{
        return dispatch({
            type:"CLEAR_CART"
        });
    };
    // increment the item
    const increment=(id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id
        })
    };
    const decrement=(id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })
    }
    // we will use the useEffect to update the data
    useEffect(() => {
      dispatch({
          type:"GET_TOTAL"
      });
      console.log("Awesome")
    },[state.item]);

    return (
        <>
        <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
        <ContextCart/>
        </CartContext.Provider>
        </>
    )
}

export default Cart
