import React from 'react';
//import cartReducer from './reducers/cartReducer';
import { useSelector, useDispatch } from "react-redux";
import {addItem,deleteItem} from "./actions/cartAction";

let ReduxComponents =()=> {
  const cartReducer = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log();
  return (
    <div className='cartreducer'>
      <h1>cartReducer: {cartReducer}</h1>
      <button className="green"
        onClick={()=>{
          dispatch(addItem())
        }}
      >ADD</button>
      <button className="red"
        onClick={()=>{
          dispatch(deleteItem())
        }}>DELETE</button>
    </div>
  );
}

export default ReduxComponents;