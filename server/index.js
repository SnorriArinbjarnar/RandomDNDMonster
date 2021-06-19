
const express = require('express');
const axios = require('axios');
const { getRandomMonsterByUrl } = require('./utils/helpers');
const PORT = process.env.PORT || 3001;

const app = express();

/* 
   DND Rest API used: https://api.open5e.com/
   ==========================================
   Since the 3rd party REST api did not have an endpoint
   for displaying all the different monster types available.
   This endpoint returns all the different monster types to populate the dropdown list.
*/
app.get("/api/monster_types", (req, res) => {
    const types = [
        {value: 'dragon', label: 'Dragon'},
        {value: 'beast', label: 'Beast'},
        {value: 'celestial', label: 'Celestial'},
        {value: 'construct', label: 'Construct'},
        {value: 'elemental', label: 'Elemental'},
        {value: 'fey', label: 'Fey'},
        {value: 'giant', label: 'Giant'},
        {value: 'humanoid', label: 'Humanoid'},
        {value: 'monstrosity', label: 'Monstrosity'},
        {value: 'plant', label: 'Plant'},
        {value: 'ooze', label: 'Ooze'},
        {value: 'undead', label: 'Undead'},
        {value: 'fiend', label: 'Fiend'}

    ];
    res.json(types)
});

app.get("/api/monster/:type", async(req, res) => {
    const type = req.params.type;
    const url = 'https://api.open5e.com/monsters/?type=' + type;
    let monster = await getRandomMonsterByUrl(url);

    res.json(monster)
});

app.listen(PORT, () => {
    console.log('Server listening on ', PORT);
});