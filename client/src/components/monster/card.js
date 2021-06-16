import React from 'react';


function Card({monster_data, name, type}) {
    let cardStyle = {
        width: '18rem'
    }
    return (
        <div className="card" style={ cardStyle} >
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
                <div className="card-text">
                    {monster_data.map( monster_info => {
                        return (
                            <p key={monster_info.label}>
                                <b>{monster_info.label}</b>
                                {monster_info.data}
                            </p>
                        );
                    })}
                </div>  
            </div>
        </div>
    );
}

export default Card;