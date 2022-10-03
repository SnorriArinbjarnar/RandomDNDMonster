import React from 'react';
import Button from '../button/button';
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
            <div className="form-group p-2">
                <label htmlFor="monsterCR">Choose a challenge rating:</label>
                <select name="monsterCR" className="form-control" id="monsterCR" onChange={props.handleChange} data-testid="select-tag-cr">
                {props.crOptions.map( (item) => {
                    return (<option data-testid="select-option-cr" key={'cr-'+item.value} value={item.value}>{item.label}</option>);
                })}
                </select>
            </div>
            <div className="form-group p-2">
                <label htmlFor="monsterEnv">Choose an Environment:</label>
                <select name="monsterEnv" className="form-control" id="monsterEnv" onChange={props.handleChange} data-testid="select-tag-env">
                {props.envOptions.map( (item) => {
                    return (<option data-testid="select-option-env" key={'env-'+item.value} value={item.value}>{item.label}</option>);
                })}
                </select>
            </div>
            <Button label="Get Monster" classes="btn btn-primary" type="submit" handleClick={null} />
        </form>
    );
}