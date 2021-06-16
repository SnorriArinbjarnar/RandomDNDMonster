import React from 'react';
/* 
    Here the dropdown list is populated with data passed down from App
*/
export default function SelectForm(props){
    
    return (
        <form onSubmit={props.handleSubmit} data-testid="select-form">
            <div className="form-group p-2">
                <label htmlFor="monster">Choose a monster type:</label>
                <select name="monster" className="form-control" id="monster" onChange={props.handleChange} data-testid="select-tag">
                {props.options.map( (item) => {
                    return (<option data-testid="select-option" key={item.value} value={item.value}>{item.label}</option>);
                })}
                </select>
            </div>
            <button className="btn btn-primary" type="submit" data-testid="submit-btn">
                            Search
            </button>
        </form>
    );
}