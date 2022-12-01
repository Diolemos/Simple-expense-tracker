import "./ExpensesFilter.css"

const ExpensesFilter = (props)=>{

    let options = []
    let currentYear = new Date().getFullYear()
    for(let i=2019;i<currentYear;i++){
        options.push(<option value={i}>{i}</option>)
    }

    



    return(<div className="filter-container">
        <h2>Filter by Year</h2> 

       

        

        <select>
           {options}
        </select>
    </div>)
}


export default ExpensesFilter