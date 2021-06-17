const axios = require('axios');

getPage = async(url) => {
    let getMonsters = await axios.get(url);
    return getMonsters.data;
}

getAllMonsters = async(url) => {
    let getMonsters = null;
    let monsterArr = [];
    try {
        getMonsters = await getPage(url);
      
        monsterArr = monsterArr.concat(getMonsters.results);
        let next_url = getMonsters.next;

        while(true){
          getMonsters = await getPage(next_url)
          monsterArr = monsterArr.concat(getMonsters.results);
          
          if(getMonsters.next === null){
            break;
          }
          else {
            next_url = getMonsters.next;
          }
        }

    } catch (err){
        console.error(err);
    }
    return monsterArr;
}

module.exports = {
    getAllMonsters
};