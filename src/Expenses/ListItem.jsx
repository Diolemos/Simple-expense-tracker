import Card from "../UI/Card"
import "./ListItem.css"
const ListItem = (props)=>{

    return(
        <li>
            <Card className='list-item'>
            <div>{props.date.toLocaleString()}</div>
            <div className="list-item__description">
                <h2 >{props.title}</h2>
                <div className="list-item__price">${props.amount}</div>    
                
            </div>    
            
           
            </Card>
        </li>   
        
    )
}

export default ListItem