import "./ExpenseForm.css"
import { useState } from "react"
const ExpenseForm = (props)=>{
// props.updateExpenses

const [expenseData, setExpenseData] = useState({title: '',
amount: "", date: ''})


const onChangeTitleHandler = (e)=>{
  
  setExpenseData((prev)=>({...prev, title: e.target.value}))
 
  console.log("expenseData", expenseData)
}
const onChangeAmountHandler = (e)=>{
  
  setExpenseData((prev)=>({...prev, amount: e.target.value}))
 
  console.log("expenseData", expenseData)
}

const onChangeDateHandler = (e)=>{
  
  setExpenseData((prev)=>({...prev, date: e.target.value}))
 
  console.log("expenseData", expenseData)
}

const onSubmitFormHandler = (e)=>{
  e.preventDefault()
}

    return (
        <form onSubmit={onSubmitFormHandler} >
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={expenseData.title}
             placeholder="Add a tittle"
             onChange={onChangeTitleHandler}
             
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
                placeholder="$"
              type='number'
              min='0.01'
              step='0.01'
              value={expenseData.amount}
              onChange={onChangeAmountHandler}
              
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={expenseData.date}
              onChange={onChangeDateHandler}
              
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type="button" onClick={props.cancelClickHandler} >Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    )
}


export default ExpenseForm