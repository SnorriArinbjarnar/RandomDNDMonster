const axios = require('axios');

getPage = async(url) => {
    let getMonsters = await axios.get(url);
    return getMonsters.data;
}

getAbilityMod = async(monster) => {
  // the DND api does not have the ability modifiers
  let mods = {
    '0'  : '-5',
    '1'  : '-5',
    '2'  : '-4',
    '3'  : '-4',
    '4'  : '-3',
    '5'  : '-3',
    '6'  : '-2',
    '7'  : '-2',
    '8'  : '-1',
    '9'  : '-1',
    '10' : '+0',
    '11' : '+0',
    '12' : '+1',
    '13' : '+1',
    '14' : '+2',
    '15' : '+2',
    '16' : '+3',
    '17' : '+3',
    '18' : '+4',
    '19' : '+4',
    '20' : '+5',
    '21' : '+5',
    '22' : '+6',
    '23' : '+6',
    '24' : '+7',
    '25' : '+7',
    '26' : '+8',
    '27' : '+8',
    '28' : '+9',
    '29' : '+9',
    '30' : '+10'
  }
  let copy2 = {...monster, 
                strMod: mods[monster.strength], 
                dexMod: mods[monster.dexterity], 
                conMod: mods[monster.constitution], 
                wisMod: mods[monster.wisdom], 
                intMod: mods[monster.intelligence], 
                chaMod: mods[monster.charisma]
              };

      
    return copy2;


}

filterMonstersByEnvironment = async(monsterArr, env) => {
  //console.log('MONSTER ARR: ', monsterArr);
  console.log('ENV: ', env);
  const environments = {
    'arctic' : [
      'commoner',
      'owl',
      'bandit',
      'blood-hawk',
      'kobold',
      'tribal-warrior',
      'giant-owl',
      'ice-mephit',
      'orc',
      'scout',
      'brown-bear',
      'half-ogre',
      'bandit-captain',
      'berserker',
      'druid',
      'griffon',
      'ogre',
      'orog',
      'polar-bear',
      'saber-toothed-tiger',
      'manticore',
      'veteran',
      'winter-wolf',
      'revenant',
      'troll',
      'werebear',
      'mammoth',
      'young-white-dragon',
      'frost-giant',
      'remorhaz',
      'roc',
      'adult-white-dragon',
      'ancient-white-dragon'
    ],
    'coastal' : [
      'commoner',
      'crab',
      'eagle',
      'bandit',
      'blood-hawk',
      'giant-crab',
      'guard',
      'kobold',
      'merfolk',
      'poisonous-snake',
      'stirge',
      'tribal-warrior',
      'giant-lizard',
      'giant-wolf-spider',
      'pseudodragon',
      'pteranodon',
      'winged-kobold',
      'sahuagin',
      'scout',
      'giant-eagle',
      'giant-toad',
      'harpy',
      'bandit-captain',
      'berserker',
      'druid',
      'griffon',
      'ogre',
      'merrow',
      'plesiosaurus',
      'sahuagin-priestess',
      'sea-hag',
      'manticore',
      'veteran',
      'banshee',
      'sahuagin-baron',
      'water-elemental',
      'cyclops',
      'young-bronze-dragon',
      'young-blue-dragon',
      'djinni',
      'marid',
      'roc',
      'storm-giant',
      'adult-bronze-dragon',
      'dragon-turtle',
      'ancient-bronze-dragon',
      'ancient-blue-dragon'
    ],
    'desert' : [
      'cat',
      'commoner',
      'hyena',
      'jackal',
      'scorpion',
      'vulture',
      'bandit',
      'camel',
      'flying-snake',
      'guard',
      'kobold',
      'mule',
      'poisonous-snake',
      'stirge',
      'tribal-warrior',
      'constrictor-snake',
      'giant-lizard',
      'giant-poisonous-snake',
      'giant-wolf-spider',
      'pseudodragon',
      'winged-kobold',
      'dust-mephit',
      'gnoll',
      'hobgoblin',
      'jackalwere',
      'scout',
      'swarm-of-insects',
      'death-dog',
      'giant-hyena',
      'giant-spider',
      'giant-toad',
      'giant-vulture',
      'half-ogre',
      'lion',
      'thri-kreen',
      'yuan-ti-pureblood',
      'bandit-captain',
      'berserker',
      'druid',
      'giant-constrictor-snake',
      'gnoll-pack-lord',
      'ogre',
      'giant-scorpion',
      'hobgoblin-captain',
      'mummy',
      'phase-spider',
      'wight',
      'yuan-ti-malison',
      'couatl',
      'gnoll-fang-of-yeenoghu',
      'lamia',
      'weretiger',
      'air-elemental',
      'fire-elemental',
      'revenant',
      'cyclops',
      'medusa',
      'young-brass-dragon',
      'yuan-ti-abomination',
      'young-blue-dragon',
      'guardian-naga',
      'efreeti',
      'gynosphinx',
      'roc',
      'adult-brass-dragon',
      'mummy-lord',
      'purple-worm',
      'adult-blue-dragon',
      'adult-blue-dragolich',
      'androsphinx',
      'ancient-brass-dragon',
      'ancient-blue-dragon'
    ],
    'forest' : [
      'awakened-shrub',
      'baboon',
      'badger',
      'cat',
      'commoner',
      'deer',
      'hyena',
      'owl',
      'bandit',
      'blood-hawk',
      'flying-snake',
      'giant-rat',
      'giant-weasel',
      'guard',
      'kobold',
      'mastiff',
      'twig-blight',
      'poisonous-snake',
      'stirge',
      'tribal-warrior',
      'blink-dog',
      'constrictor-snake',
      'elk',
      'giant-badger',
      'giant-frog',
      'giant-lizard',
      'giant-owl',
      'giant-poisonous-snake',
      'giant-wolf-spider',
      'goblin',
      'kenku',
      'needle-blight',
      'panther',
      'pixie',
      'pseudodragon',
      'sprite',
      'swarm-of-ravens',
      'winged-kobold',
      'wolf',
      'ape',
      'black-bear',
      'giant-wasp',
      'gnoll',
      'hobgoblin',
      'lizardfolk',
      'orc',
      'satyr',
      'scout',
      'swarm-of-insects',
      'vine',
      'blight',
      'worg',
      'brown-bear',
      'bugbear',
      'dire-wolf',
      'dryad',
      'giant-hyena',
      'giant-spider',
      'giant-toad',
      'goblin-boss',
      'half-ogre',
      'harpy',
      'tiger',
      'yuan-ti-pureblood',
      'ankheg',
      'awakened-tree',
      'bandit-captain',
      'centaur',
      'druid',
      'ettercap',
      'giant-boar',
      'giant-constrictor-snake',
      'giant-elk',
      'gnoll-pack-lord',
      'grick',
      'lizardfolk-shaman',
      'ogre',
      'orc-eye-of-gruumsh',
      'orog',
      'pegasus',
      'swarm-of-poisonous-snakes',
      'wererat',
      'will-o-wisp',
      'displacer-beast',
      'green-hag',
      'hobgoblin-captain',
      'owlbear',
      'phase-spider',
      'veteran',
      'werewolf',
      'yuan-ti-malison',
      'banshee',
      'couatl',
      'gnoll-fang-of-yeenoghu',
      'wereboar',
      'weretiger',
      'gorgon',
      'revenant',
      'shambling-mound',
      'troll',
      'unicorn',
      'werebear',
      'giant-ape',
      'grick-alpha',
      'oni',
      'yuan-ti-abomination',
      'young-green-dragon',
      'treant',
      'guardian-naga',
      'young-gold-dragon',
      'adult-green-dragon',
      'adult-gold-dragon',
      'ancient-green-dragon',
      'ancient-gold-dragon'

    ],
    'mountain' : [
      'eagle',
      'goat',
      'blood-hawk',
      'guard',
      'kobold',
      'stirge',
      'tribal-warrior',
      'aarakocra',
      'pseudodragon',
      'pteranodon',
      'swarm-of-bats',
      'winged-kobold',
      'giant-goat',
      'orc',
      'scout',
      'giant-eagle',
      'half-ogre',
      'harpy',
      'hippogriff',
      'lion',
      'berserker',
      'druid',
      'giant-elk',
      'griffon',
      'ogre',
      'orc-eye-of-gruumsh',
      'orog',
      'peryton',
      'saber-toothed-tiger',
      'basilisk',
      'hell-hound',
      'manticore',
      'veteran',
      'ettin',
      'air-elemental',
      'bulette',
      'troll',
      'chimera',
      'cyclops',
      'galeb-duhr',
      'wyvern',
      'stone-giant',
      'frost-giant',
      'cloud-giant',
      'fire-giant',
      'young-silver-dragon',
      'young-red-dragon',
      'roc',
      'adult-silver-dragon',
      'adult-red-dragon',
      'ancient-silver-dragon',
      'ancient-red-dragon'
    ],
    'grassland' : [
      'cat',
      'commoner',
      'deer',
      'eagle',
      'goat',
      'hyena',
      'jackal',
      'vulture',
      'blood-hawk',
      'flying-snake',
      'giant-weasel',
      'guard',
      'poisonous-snake',
      'stirge',
      'tribal-warrior',
      'axe-beak',
      'boar',
      'elk',
      'giant-poisonous-snake',
      'giant-wolf-spider',
      'goblin',
      'panther',
      'pteranodon',
      'riding-horse',
      'wolf',
      'cockatrice',
      'giant-goat',
      'giant-wasp',
      'gnoll',
      'hobgoblin',
      'jackalwere',
      'orc',
      'scout',
      'swarm-of-insects',
      'worg',
      'bugbear',
      'giant-eagle',
      'giant-hyena',
      'giant-vulture',
      'goblin-boss',
      'hippogriff',
      'lion',
      'scarecrow',
      'thri-kreen',
      'tiger',
      'allosaurus',
      'ankheg',
      'centaur',
      'druid',
      'giant-boar',
      'giant-elk',
      'gnoll',
      'pack-lord',
      'griffon',
      'ogre',
      'orc-eye-of-gruumsh',
      'orog',
      'pegasus',
      'rhinoceros',
      'ankylosaurus',
      'hobgoblin-captain',
      'manticore',
      'phase-spider',
      'veteran',
      'couatl',
      'elephant',
      'gnoll-fang-of-yeenoghu',
      'wereboar',
      'weretiger',
      'bulette',
      'gorgon',
      'triceratops',
      'chimera',
      'cyclops',
      'tyrannosaurus-rex',
      'young-gold-dragon',
      'adult-gold-dragon',
      'ancient-gold-dragon'
    ],
    'hill' : [
      'baboon',
      'commoner',
      'eagle',
      'goat',
      'hyena',
      'raven',
      'vulture',
      'bandit',
      'blood-hawk',
      'giant-weasel',
      'guard',
      'kobold',
      'mastiff',
      'mule',
      'poisonous-snake',
      'stirge',
      'tribal-warrior',
      'axe-beak',
      'boar',
      'elk',
      'giant-owl',
      'giant-wolf-spider',
      'goblin',
      'panther',
      'pseudodragon',
      'swarm-of-bats',
      'swarm-of-ravens',
      'winged-kobold',
      'wolf',
      'giant-goat',
      'gnoll',
      'hobgoblin',
      'orc',
      'scout',
      'swarm-of-insects',
      'worg',
      'brown-bear',
      'dire-wolf',
      'giant-eagle',
      'giant-hyena',
      'goblin-boss',
      'half-ogre',
      'harpy',
      'hippogriff',
      'lion',
      'bandit-captain',
      'berserker',
      'druid',
      'giant-boar',
      'giant-elk',
      'gnoll-pack-lord',
      'griffon',
      'ogre',
      'orog',
      'pegasus',
      'peryton',
      'green-hag',
      'hobgoblin-captain',
      'manticore',
      'phase-spider',
      'veteran',
      'werewolf',
      'ettin',
      'wereboar',
      'bulette',
      'gorgon',
      'hill-giant',
      'revenant',
      'troll',
      'werebear',
      'chimera',
      'cyclops',
      'galeb-duhr',
      'wyvern',
      'stone-giant',
      'young-copper-dragon',
      'young-red-dragon',
      'roc',
      'adult-copper-dragon',
      'adult-red-dragon',
      'ancient-copper-dragon',
      'ancient-red-dragon'
    ]
  }

  
  if(env === 'all'){
    return monsterArr;
  }
  
  const result = monsterArr.filter( d => {
    return environments[env].includes(d.slug);
  })
  
  return result;
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
getMonstersUsingLimitCount = async(url, env) => {
  let getMonsters = null;
  let index = null;

  try {
      getMonsters = await getPage(url);
      
      const count = getMonsters.count;
      
      let newUrl = url + '&limit=' + count;
      getMonsters = await getPage(newUrl);
      
      getMonsters = await filterMonstersByEnvironment(getMonsters.results, env);
      
      
      index = Math.floor(Math.random() * getMonsters.length);
      
      return getMonsters[index];
  } catch (err) {
      console.error(err);
  }

}

module.exports = {
  getRandomMonsterByUrl,
  getMonstersUsingLimitCount,
  getAbilityMod
};