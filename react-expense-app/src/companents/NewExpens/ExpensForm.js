import React, { useState } from "react";
import './ExpensForm.css'

const ExpenseForm = (props)=>{
    const [title,setTitle] = useState ('')
    const [amount,setAmount] = useState ('')
    const [date,setDate] = useState ('')
    const titleChangedHandler = (e)=> {
       if(e.target.value.length > 0){
           setTitle(e.target.value)
       }else{
           return
       }
    }
    const amountChangedHandler = (e)=> {
        if(e.target.value.length > 0){
          setAmount(e.target.value);
        }else{
            return
        }
    }
    const dateChangedHandler = (e)=> {
        if(e.target.value.length > 0){
           setDate(e.target.value)
        }else{
            return
        }
    }

    const submitChangeHondler = (e)=>{
        e.preventDefault()
      if(title.length > 0 && amount.length >0 && date.length > 0){
        const expenseData = {
            title,
            date: new Date(date),
            amount,
        };
        props.getData(expenseData)
      }
        setAmount('')
        setDate ('')
        setTitle('')
    }
    return (
        <form onSubmit={submitChangeHondler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={titleChangedHandler} type= "text" id="title" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input value={amount} onChange={amountChangedHandler} type= "number" id="amount" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input value={date} onChange={dateChangedHandler} type= "date" id="date" />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                    <button onClick={props.shown}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;