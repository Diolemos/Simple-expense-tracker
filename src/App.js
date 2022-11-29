import './App.css';
import {React,useState} from 'react';
import Expenses from './Expenses/Expenses';
import NewExpense from './newExpense/NewExpense';

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

 const updateExpenses = (newExpense)=>{
  setExpenses(prev=>{return [...prev,newExpense]})
 }
  return (
    <div className="App">
      {/* graphic */}
      {/* filter */}
      {/* inputform */}
      <NewExpense updateExpenses={updateExpenses}/>
      {/* expenses display */}
     <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
