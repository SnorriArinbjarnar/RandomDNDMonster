
const express = require('express');
const axios = require('axios');
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

/* 
    This endpoint returns a random monster of the given type,
    since the REST API used did not support giving random monster
    I had to make the logic for that.
*/
app.get('/api/random_monster/:type', async(req, res) => {
    const type = req.params.type;
    const url = 'https://api.open5e.com/monsters/?type=' + type;
    let getMonsters = null;
    try {
        getMonsters = await axios.get(url);
    } catch (err){
        console.error(err);
    }
    /* 
        The DND rest api has pagination, here only the first results page
        is used, a random number is picked for the first 50 results.  If I had more 
        time I would have solved this by going through all the pages and splicing the JSON together
        and then returning the correct index.
    */
    const count = getMonsters.data.results.length;
    const randomNumb = Math.floor(Math.random() * count);
    res.json(getMonsters.data.results[randomNumb]);
})

app.listen(PORT, () => {
    console.log('Server listening on ', PORT);
});