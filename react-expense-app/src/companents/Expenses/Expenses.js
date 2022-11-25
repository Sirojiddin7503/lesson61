import React, { useState } from "react";
import ExpenseItem from './ExpensItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props)=>{
    const [select, setSelect] = useState(2022)
    const getselectData = (sele)=> {
        setSelect(sele)
    }
    const information = props.data.filter((item)=>{
        return item.date.getFullYear() === +select
    })

    let expenseContent = ''
    if(information.length === 0){
        expenseContent = <p className="ppp">No Expense Found</p>;
    }else {expenseContent=
            information.map((item) => {
               return (
                  <ExpenseItem
                   key={item.id}
                   price={item.amount}
                   name={item.title}
                   date={item.date} />
               );
              })
    }
    return (
        <div className="expenses">
              <ExpensesFilter  getSelect={getselectData} selectedData={select} />
              {expenseContent}
        </div>
    );
};

export default Expenses