import {React, useState} from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false)
    const startEditing = ()=>{
        setIsEditing(true)
    }
    const closeForm = ()=>{setIsEditing(false)}

    return( 
        <div className="new-expense"> 
            {!isEditing && (
        <button onClick={startEditing}>Add new expense</button>
    )}
    {isEditing&&(
       <ExpenseForm cancelClickHandler={closeForm} updateExpenses={props.updateExpenses}/>
    )}

        </div>
       
        

    )
}

export default NewExpense