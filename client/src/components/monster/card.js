import React from 'react';


function Card({monster_data, name, type}) {
    let cardStyle = {
        width: '100%'
    }
    return (
        <div className="card" style={ cardStyle} >
            <div className="card-header text-center">
                <h5 className="card-title mb-0">{name}</h5>
                <small className="text-muted">{monster_data.size} {monster_data.alignment} {type}</small>
            </div>
            <div className="card-body">
                <section className="misc ">
                    <div className="row text-center">
                        <div className="col-sm-3 ">
                            <p className="mb-0 miscAttr"><b>AC</b></p>
                            <p className="miscVal">{monster_data.armor_class}</p>
                        </div>
                    <div className="col-sm-5 ">
                        <p className="mb-0 miscAttr"><b>Challenge rating</b></p>
                        <p className="miscVal">{monster_data.challenge_rating}</p>
                    </div>
                    <div className="col-sm-3 ">
                        <p className="mb-0 miscAttr"><b>HP</b></p>
                        <p className="miscVal">{monster_data.hit_points}</p>
                    </div>
                 </div>           
            </section>  
            </div>
            <ul className="list-group list-group-flush">
                      <li className="list-group-item p-2">
                        <section className="stats">
                            <div className="row text-center">
                                <div className="col-4 col-md-2">
                                    <p className="mb-0"><b>STR</b></p>
                                    <p><span className="ability_point mr-3">{monster_data.strength}</span><span className="ability_mod">({monster_data.strMod})</span></p>
                                </div>
                                <div className="col-4 col-md-2">
                                    <p className="mb-0"><b>DEX</b></p>
                                    <span className="ability_point mr-3">{monster_data.dexterity}</span><span className="ability_mod">({monster_data.dexMod})</span>
                                </div>
                                <div className="col-4 col-md-2">
                                    <p className="mb-0"><b>CON</b></p>
                                    <span className="ability_point mr-3">{monster_data.constitution}</span><span className="ability_mod">({monster_data.conMod})</span>
                                </div>
                                <div className="col-4 col-md-2">
                                    <p className="mb-0"><b>INT</b></p>
                                    <span className="ability_point mr-3">{monster_data.intelligence}</span><span className="ability_mod">({monster_data.intMod})</span>
                                </div>
                                <div className="col-4 col-md-2">
                                    <p className="mb-0"><b>WIS</b></p>
                                    <span className="ability_point mr-3">{monster_data.wisdom}</span><span className="ability_mod">({monster_data.wisMod})</span>
                                </div>
                                <div className="col-4 col-md-2">
                                    <p className="mb-0"><b>CHA</b></p>
                                    <span className="ability_point mr-3">{monster_data.charisma}</span><span className="ability_mod">({monster_data.chaMod})</span>
                                </div>
                            </div>
                        </section>
                      </li>
                    </ul>
        </div>
    );
}

export default Card;