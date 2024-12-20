import { useState } from 'react';
import './Form.css'

const standardData = 
{
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    "duration": 10,
}
function Form(props) {
    const [userInput, setUserInput] = useState(standardData);
    const submitHandler = (event) => {
        event.preventDefault();
        props.calculate(userInput);
    }
    const resetHandler = () => {
        setUserInput(standardData)
    }
    const valueHandler = (inputId, value) => {
        setUserInput((prevInput) => {
            return { ...prevInput, [inputId]: +value };
        });
    }
    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <div>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => valueHandler("current-savings", event.target.value)} value={userInput["current-savings"]} type="number" id="current-savings" />
                </div>
                <div>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => valueHandler("yearly-contribution", event.target.value)} value={userInput["yearly-contribution"]} type="number" id="yearly-contribution" />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => valueHandler("expected-return", event.target.value)} value={userInput["expected-return"]} type="number" id="expected-return" />
                </div>
                <div>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => valueHandler("duration", event.target.value)} value={userInput["duration"]} type="number" id="duration" />
                </div>
            </div>
            <div className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </div>
        </form>
    )
}

export default Form