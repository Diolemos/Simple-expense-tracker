import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import  "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'
import {  useState } from "react"
export default function Expenses (props){

    const [filteredYear, setFilteredYear] = useState('')
    return(
        <Card className="expenses"> 
        <ExpensesFilter expenses={props.expenses} getFilteredYear={setFilteredYear}/>
        <ExpensesList expenses={props.expenses} filteredYear={filteredYear}/>
  </Card>
    )
}