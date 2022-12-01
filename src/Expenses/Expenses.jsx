import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import  "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'

export default function Expenses (props){
    return(
        <Card className="expenses"> 
        <ExpensesFilter />
        <ExpensesList expenses={props.expenses}/>
  </Card>
    )
}