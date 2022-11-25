import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import  "./Expenses.css"

export default function Expenses (props){
    return(
        <Card className="expenses"> 
        
        <ExpensesList expenses={props.expenses}/>
  </Card>
    )
}