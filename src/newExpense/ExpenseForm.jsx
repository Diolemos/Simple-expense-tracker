import "./ExpenseForm.css"
import { useState } from "react"
const ExpenseForm = (props)=>{
// props.updateExpenses

const [enteredTitle, setEnteredTitle] = useState("")
const [enteredAmount, setEnteredAmount] = useState("")
const [enteredDate, setEnteredDate] = useState("")


const onChangeTitleHandler = (e)=>{
   setEnteredTitle(e.target.value)
 
 
}
const onChangeAmountHandler = (e)=>{
  
  setEnteredAmount(e.target.value)
 

}

const onChangeDateHandler = (e)=>{
  
  setEnteredDate(e.target.value)
 
  
}

const onSubmitFormHandler = (e)=>{
  //prevent from reloading
  e.preventDefault() 
  console.log({title:enteredTitle, amount:enteredAmount, date: new Date(enteredDate)})

  const newExpense = {title:enteredTitle, amount:enteredAmount, date: new Date(enteredDate)}
  //set the global level state to our user created data
  props.updateExpenses(newExpense)

  //reset input field using two way biding
  setEnteredTitle('')
  setEnteredAmount('')
  setEnteredDate('')
}

    return (
        <form onSubmit={onSubmitFormHandler} >
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
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
              value={enteredAmount}
              onChange={onChangeAmountHandler}
              
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
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