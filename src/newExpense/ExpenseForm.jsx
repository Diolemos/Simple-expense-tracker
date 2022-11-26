import "./ExpenseForm.css"

const ExpenseForm = (props)=>{

    return (
        <form >
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
             placeholder="Add a tittle"
             
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
                placeholder="$"
              type='number'
              min='0.01'
              step='0.01'
              
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type="button" onClick={props.cancelClickHandler} >Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    )
}


export default ExpenseForm