import React from 'react';
import SelectForm from './selectForm';

function Header({title, options, crOptions, handleSubmit, handleChange}) {
    return (
        <header className="row text-center">
            <div className="col-12">
                <h1>{title}</h1>
            </div>
            <div className="col-12  d-flex flex-column justify-content-center align-items-center">
                <SelectForm options={options} crOptions={crOptions} handleSubmit={handleSubmit} handleChange={handleChange}/>
            </div>
        </header>
    );
}

export default Header;