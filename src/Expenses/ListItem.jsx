import Card from "../UI/Card"
import "./ListItem.css"
import ExpenseDate from "./ExpenseDate"
const ListItem = (props)=>{

    return(
        <li >
            <Card className='list-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="list-item__description">
                <h2 >{props.title}</h2>
                <div className="list-item__price"><span>$</span>{props.amount}</div>    
                
            </div>    
            
           
            </Card>
        </li>   
        
    )
}

export default ListItem