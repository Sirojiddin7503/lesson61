import React, { useState } from "react";
import ExpenseForm from "./ExpensForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const[show, setshow] = useState(false)
    const dataExpenseForm = (data)=>{
        const expenseInfo = {
            ...data,
            id: Math.random()*10
        }
        props.inform(expenseInfo)
    }
    const isshow = ()=>{
        setshow(!show)
    }
    return(
        <div className="new-expense">
            {
                show?<ExpenseForm getData={dataExpenseForm} shown={isshow} />:
               <button onClick={isshow}>Add new Expense</button>
            }
        </div>
    )
}

export default NewExpense