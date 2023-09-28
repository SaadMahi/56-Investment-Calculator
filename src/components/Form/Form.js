const Form = function(){

  // form submit
  const userInput = ((e) => {
    e.preventDefault()
    console.log('CALCULATE')
  })

// reset button
const resetBtn = ((e) => {
  console.log('RESET')
})

// single input function using for all inputs
// here we will pass in two parametrs, user input and value
const inputChangeHandler = ((input, value) => {
console.log(input, value)
})

    return(
        <form onSubmit={userInput} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={((e) => inputChangeHandler(e.target.id , e.target.value))} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={((e) => inputChangeHandler(e.target.id , e.target.value))} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={((e) => inputChangeHandler(e.target.id , e.target.value))} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={((e) => inputChangeHandler(e.target.id , e.target.value))} type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetBtn} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}

export default Form;