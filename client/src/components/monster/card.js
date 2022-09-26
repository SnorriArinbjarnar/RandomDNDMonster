import React from 'react';
import Collapse from "../collapse/Collapse";


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
                        <p className="mb-0 miscAttr"><b>Challenge Rating</b></p>
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
                      <Collapse label="Speed"  data={monster_data.speed ? monster_data.speed : '' } mod="ft" type="objAllInfo" />
                      { (monster_data.strength_save || 
                        monster_data.dexterity_save || 
                        monster_data.constitution_save || 
                        monster_data.intelligence_save || 
                        monster_data.wisdom_save || 
                        monster_data.charisma_save) ? <Collapse label="Saving Throws" data={
                            {
                                ...(monster_data.strength_save && {'STR' : monster_data.strength_save}),
                                ...(monster_data.dexterity_save && {'DEX' : monster_data.dexterity_save}),
                                ...(monster_data.constitution_save && {'CON' : monster_data.constitution_save}),
                                ...(monster_data.intelligence_save && {'INT' : monster_data.intelligence_save}),
                                ...(monster_data.wisdom_save && {'WIS' : monster_data.wisdom_save}),
                                ...(monster_data.charisma_save && {'CHA' : monster_data.charisma_save})
                              }
                        } mod="+" type="objAllInfo" /> :  ''}
                      { monster_data.skills ? <Collapse label="Skills"  data={monster_data.skills ? monster_data.skills : '' } mod="+" type="objAllInfo" /> : '' }
                      { monster_data.senses ? <Collapse label="Senses" data={monster_data.senses ? monster_data.senses : '' } mod="" type="objString" /> : '' }
                      { monster_data.languages ? <Collapse label="Languages"  data={monster_data.languages ? monster_data.languages : '' } mod="" type="objString" /> : '' }

                      { (monster_data.damage_resistances || monster_data.damage_immunities || monster_data.condition_immunities) ? <Collapse label="Immunities and resistances" data={
                          {
                            ...( monster_data.damage_resistances && {'Damage Resistances' : monster_data.damage_resistances} ),
                            ...( monster_data.damage_immunities && {'Damage Immunities' : monster_data.damage_immunities } ),
                            ...( monster_data.condition_immunities && {'Condition Immunities' : monster_data.condition_immunities} )
                        }
                      } mod="" type="objStringInfo" /> : ''
                      }
                      {
                          monster_data.special_abilities ? <Collapse label="Special Abilities" data={monster_data.special_abilities ? monster_data.special_abilities : ''} mod="" type="objArrValInfo" /> : ''
                          
                      }
                       {
                          monster_data.actions ? <Collapse label="Actions" data={monster_data.actions ? monster_data.actions : '' } mod="" type="objArrValInfo" /> : ''
                          
                      }
                      {
                          monster_data.legendary_actions ? <Collapse label="Legendary Actions" data={monster_data.legendary_actions ? monster_data.legendary_actions : ''} mod="" type="objArrValInfo" /> : ''
                      }

                    </ul>
        </div>
    );
}

export default Card;