
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

app.get("/api/challenge_ratings", (req, res) => {
    const types = [
        {value: '0', label: '0'},
        {value: '1/8', label: '1/8'},
        {value: '1/4', label: '1/4'},
        {value: '1/2', label: '1/2'},
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '5', label: '5'},
        {value: '6', label: '6'},
        {value: '7', label: '7'},
        {value: '8', label: '8'},
        {value: '9', label: '9'},
        {value: '10', label: '10'}

    ];
    res.json(types)
});

app.get("/api/monster/:type", async(req, res) => {
    const type = req.params.type;
    const url = 'https://api.open5e.com/monsters/?type=' + type;
    let monster = await getRandomMonsterByUrl(url);

    res.json(monster)
});
app.get("/api/monster/:type/:cr", async(req, res) => {
    const type = req.params.type;
    const cr = req.params.cr;
    const url = 'https://api.open5e.com/monsters/?type=' + type + '&challenge_rating=' + cr;
    let monster = await getRandomMonsterByUrl(url);

    res.json(monster)
});

app.listen(PORT, () => {
    console.log('Server listening on ', PORT);
});