
const path = require('path');
const express = require('express');
const axios = require('axios');
const { getRandomMonsterByUrl, getAbilityMod } = require('./utils/helpers');
const PORT = process.env.PORT || 3001;

const app = express();
/* 
    Have Node serve the files for our built React app
*/
app.use(express.static(path.resolve(__dirname, '../client/build')));

/* 
   DND Rest API used: https://api.open5e.com/
   ==========================================
   Since the 3rd party REST api did not have an endpoint
   for displaying all the different monster types available.
   This endpoint returns all the different monster types to populate the dropdown list.
*/
app.get("/api/monster_types", (req, res) => {
    const types = [
        {value: 'aberration', label: 'Aberration'},
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
    /* 
    The fractional challenge ratings are a edge case.  If the value would be
    the actual fractions the api call would be:
        api/monsters/type/1/4 
    Instead I use a digit and change them
    */
    const types = [
        {value: '0', label: '0'},
        {value: '0.125', label: '1/8'},
        {value: '0.25', label: '1/4'},
        {value: '0.5', label: '1/2'},
        {value: '1', label: '1'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
        {value: '4', label: '4'},
        {value: '5', label: '5'},
        {value: '6', label: '6'},
        {value: '7', label: '7'},
        {value: '8', label: '8'},
        {value: '9', label: '9'},
        {value: '10', label: '10'},
        {value: '11', label: '11'},
        {value: '12', label: '12'},
        {value: '13', label: '13'},
        {value: '14', label: '14'},
        {value: '15', label: '15'},
        {value: '16', label: '16'},
        {value: '17', label: '17'},
        {value: '18', label: '18'},
        {value: '19', label: '19'},
        {value: '20', label: '20'},
        {value: '21', label: '21'},
        {value: '22', label: '22'},
        {value: '23', label: '23'},
        {value: '24', label: '24'},
        {value: '30', label: '30'},


    ];
    res.json(types)
});

app.get("/api/env", (req, res) => {
    /* 
    The fractional challenge ratings are a edge case.  If the value would be
    the actual fractions the api call would be:
        api/monsters/type/1/4 
    Instead I use a digit and change them
    */
    const environments = [
        {value: 'all', label: 'All'},
        {value: 'arctic', label: 'Arctic'},
        {value: 'coastal', label: 'Coastal'},
        {value: 'desert', label: 'Desert'},
        {value: 'forest', label: 'Forest'},
        {value: 'grassland', label: 'Grassland'},
        {value: 'hill', label: 'Hill'},
        {value: 'mountain', label: 'Mountain'},
        {value: 'swamp', label: 'Swamp'},
        {value: 'underdark', label: 'Underdark'},
        {value: 'underwater', label: 'Underwater'},
        {value: 'urban', label: 'Urban'}
    ];
    res.json(environments)
});

app.get("/api/monster/:type", async(req, res) => {
    const type = req.params.type;
    const url = 'https://api.open5e.com/monsters/?type=' + type;
    let monster = await getRandomMonsterByUrl(url);

    res.json(monster)
});
app.get("/api/monster/:type/:cr", async(req, res) => {
    const fractions = {
        0.25  : '1/4',
        0.5   : '1/2',
        0.125 : '1/8'
    };
    const type = req.params.type;
    let cr = req.params.cr;
    if(fractions[cr]){
        cr = fractions[cr];
    }
    const url = 'https://api.open5e.com/monsters/?type=' + type + '&challenge_rating=' + cr;
    let monster = await getRandomMonsterByUrl(url);
  
    let copyMonster;
    if(monster){
        copyMonster = await getAbilityMod(monster);

    }
    
    if(copyMonster){
        res.json(copyMonster)
    }
    else {
        res.json(monster)
    }
    
});

app.get("/api/monster/:type/:cr/:env", async(req, res) => {
    const fractions = {
        0.25  : '1/4',
        0.5   : '1/2',
        0.125 : '1/8'
    };
    const type = req.params.type;
    const env = req.params.env;
    let cr = req.params.cr;
    if(fractions[cr]){
        cr = fractions[cr];
    }
    const url = 'https://api.open5e.com/monsters/?type=' + type + '&challenge_rating=' + cr;
    let monster = await getMonstersUsingLimitCount(url, env);
  
    let copyMonster;
    if(monster){
        copyMonster = await getAbilityMod(monster);

    }
    
    if(copyMonster){
        res.json(copyMonster)
    }
    else {
        res.json(monster)
    }
    
});

/* 
    All other GET requests not handled before will return our React app
*/
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server listening on ', PORT);
});