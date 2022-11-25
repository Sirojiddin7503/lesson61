import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
const Num = (props) => {
  const [inc, setInc] =useState(0);
    return (
      <div className="expense-item">
      <ExpenseDate  date={props.date}/>
          <div className="expense-item__description">
            <h2>{props.name}</h2>
            <div className="expense-item__price ">{props.price}$</div>
          </div>
      </div>
    )
}

export default Num;