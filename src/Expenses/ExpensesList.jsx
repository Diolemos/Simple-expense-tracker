import "./ExpensesList.css"

export default function ExpenseList(props){


    return(
        <ul className="expenses-list">
        {props.expenses.map(expense=>{return(<li>
        <h2>{expense.title}</h2>
        <div>${expense.amount}</div>
        <div>{expense.date.toLocaleString()}</div>
        </li>)})}
        </ul>
    )
}