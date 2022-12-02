import "./ExpensesList.css"
import ListItem from "./ListItem"


export default function ExpenseList(props){
let filteredExpenses = props.expenses.filter((expense)=>{
    return expense.date.getFullYear()==props.filteredYear
})

    return(
        <ul className="expenses-list">
        {
        props.filteredYear==''?
        props.expenses.map(expense=>{return(<ListItem key={expense.title} title={expense.title} amount={expense.amount} date={expense.date}></ListItem>)})
    :filteredExpenses.map(expense=>{return(<ListItem key={expense.title} title={expense.title} amount={expense.amount} date={expense.date}></ListItem>)})
    
    
    }
        
            
        
        </ul>
    )
}