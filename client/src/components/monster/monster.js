import React from 'react';
import Card from './card';

/* 
    the Monster component renders data about the random
    monster that was fetched. monster_data is the data to be displayed
    for given monster, feel free to look at the documentation and add or remove
    properties
*/
function Monster({monster}) {
    return (
        <div id="monster_ctr" className="row d-flex justify-content-center align-items-center p-4">
            <div className="col-sm-10 col-md-8 ">
                {/*<Card monster_data={ [
                    {label: 'Armor Class ', data: monster.armor_class},
                    {label: 'Hit Points ', data: monster.hit_points}
                ] } name={monster.name} type={monster.type} />*/}
                <Card monster_data={ monster } name={monster.name} type={monster.type} />
            </div>
        </div>
    );
}

export default Monster;