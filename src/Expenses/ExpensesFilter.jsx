import "./ExpensesFilter.css"

const ExpensesFilter = (props)=>{

    let options = [<option disabled selected>***Select a year***</option>,]
    let currentYear = new Date().getFullYear()
    for(let i=2019;i<=currentYear;i++){
        options.push(<option key={i} value={i}>{i}</option>)
    }
    const onChangeFilter = (e)=>{
        props.getFilteredYear(e.target.value)
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