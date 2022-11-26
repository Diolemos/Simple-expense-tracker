import {React, useState} from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false)
    const startEditing = ()=>{
        setIsEditing(true)
    }

    return( 
        <div className="new-expense"> 
            {!isEditing && (
        <button onClick={startEditing}>Add new expense</button>
    )}
    {isEditing&&(
       <ExpenseForm/>
    )}

        </div>
       
        

    )
}

export default NewExpense