import "./ExpenseForm.css"
import { useState } from "react"





const ExpenseForm = (props)=>{


  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState("")
  const [enteredDate, setEnteredDate] = useState("")
  //state for form validation

  const [btnDisabled, setBtnDisabled] = useState(true)
  //function to check if btn should be enabled
  //using chained ternary operators
  const checkIfDisabled = ()=>{
    const isValid = enteredTitle.length()<5?false
    :enteredAmount==''?false
    :enteredDate==''?false
    :true
    setBtnDisabled(isValid)
    
    

  }
  const onChangeTitleHandler = (e)=>{
    setEnteredTitle(e.target.value)
    checkIfDisabled()
  
  
  }
  const onChangeAmountHandler = (e)=>{
    
    setEnteredAmount(e.target.value)
    checkIfDisabled()
  

  }

  const onChangeDateHandler = (e)=>{
    
    setEnteredDate(e.target.value)
    checkIfDisabled()
    
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
          <button type='submit' disabled={btnDisabled}>Add Expense</button>
        </div>
      </form>
    )
}


export default ExpenseForm