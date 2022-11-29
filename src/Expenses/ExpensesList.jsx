import "./ExpensesList.css"
import ListItem from "./ListItem"


export default function ExpenseList(props){


    return(
        <ul className="expenses-list">
        {props.expenses.map(expense=>{return(<ListItem key={expense.title} title={expense.title} amount={expense.amount} date={expense.date}></ListItem>)})}
        </ul>
    )
}