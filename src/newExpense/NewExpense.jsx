import {React, useState} from "react"
import './NewExpense.css'
const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false)


    return( 
        <div className="new-expense"> 
            {!isEditing && (
        <button>Add new expense</button>
    )}

        </div>
       
        

    )
}

export default NewExpense