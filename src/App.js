import './App.css';
import {React,useState} from 'react';

function App() {


  const [expenses, setExpenses] = useState([
    {
      
      title: 'Gas',
      amount: 150.31,
      date: new Date(2022, 11, 22),
    },
    {  title: 'New TV', amount: 799.49, date: new Date(2022, 10, 12) },
    {
      
      title: 'Rent',
      amount: 700,
      date: new Date(2022, 5, 11),
    },
    {
     
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 11),
    },
  ])


  return (
    <div className="App">
      {/* graphic */}
      {/* filter */}
      {/* expenses display */}
      <div> 
            {expenses.map(expense=>{return(<div>
            <h2>{expense.title}</h2>
            <div>{expense.amount}</div>
            <div>{expense.date.toLocaleString()}</div>
            </div>)})}
      </div>
    </div>
  );
}

export default App;
