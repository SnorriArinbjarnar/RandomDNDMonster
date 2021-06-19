const axios = require('axios');

getPage = async(url) => {
    let getMonsters = await axios.get(url);
    return getMonsters.data;
}

getRandomMonsterByUrl = async(url) => {
    let getMonsters = null;
    let monsterArr = [];
    let index = null;
    try {
        getMonsters = await getPage(url);
        const count = getMonsters.count;
        index = Math.floor(Math.random() * count);
        /* 
          if maximum number of entries is the same as the results array it means 
          we only have one page, so we return the results array

          if the index we are fetching can be found on the first page, we can just
          return it
        */
        if(count === getMonsters.results.length || index <= getMonsters.results.length){
          return getMonsters.results[index];
        }
        

        monsterArr = monsterArr.concat(getMonsters.results);
        let next_url = getMonsters.next;

        while(true){
          getMonsters = await getPage(next_url)
          monsterArr = monsterArr.concat(getMonsters.results);
          
          /* 
          if gestMonsters.next is null it means we are on the last page 
          so we return the monster

          if we already have the index we need, we do not have to go any further
          and return the monster
          */
          if(getMonsters.next === null || index <= monsterArr.length){
            break;
          }
          else {
            next_url = getMonsters.next;
          }
        }

    } catch (err){
        console.error(err);
    }
    return monsterArr[index];
}

/* 
  A slightly different (slower) way of doing the same thing.
  Fetch all monsters with a given type and fetch the count variable,
  which is the total number of results, calling again the same endpoint
  with limit set to the count:
    url?type=<monster_type>&limit=<count>
  this way we fetch all the results on a single page and simply return
  this is slower but you are always calling the endpoint twice, no matter how many
  pages there are.
*/
 getMonstersUsingLimitCount = async(url) => {
  let getMonsters = null;
  let index = null;

  try {
      getMonsters = await getPage(url);
      const count = getMonsters.count;
      index = Math.floor(Math.random() * count);
      let newUrl = url + '&limit=' + count;
      getMonsters = await getPage(newUrl);
      return getMonsters.results[index];
  } catch (err) {
      console.error(err);
  }

}

module.exports = {
  getRandomMonsterByUrl,
  getMonstersUsingLimitCount
};