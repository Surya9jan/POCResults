import React from 'react';
import './Form.css';
const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <div className="ui focus input inputstyle"><input type="text" name="city" placeholder="City..." /></div>
            <div className="ui focus input inputstyle"><input type="text" name="country" placeholder="Country..." /></div>
            <button className="ui button buttonstyle">Get Weather</button>
        </form>
    )
}
export default Form;