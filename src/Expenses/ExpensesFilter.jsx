import "./ExpensesFilter.css"

const ExpensesFilter = (props)=>{

    let options = []
    let currentYear = new Date().getFullYear()
    for(let i=2019;i<currentYear;i++){
        options.push(<option key={i} value={i}>{i}</option>)
    }
    const onChangeFilter = (e)=>{
        //pass a function from (app.js?/expenses.js?) that send the user selected year
        console.log(e.target.value)
    }
    



    return(<div className="filter-container">
        <h2>Filter by Year</h2> 

       

        

        <select onChange={onChangeFilter}>
           {options}
        </select>
    </div>)
}


export default ExpensesFilter