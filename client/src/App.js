import Header from './components/header/header';
import React, {useState, useEffect, useRef} from 'react';
import Monster from './components/monster/monster';
import axios from 'axios';

/* 
App function is the single source of truth and passes
data down to child components
*/
function App() {
  const [options, setOptions] = useState([]);
  const [crOptions, setCr] = useState([]);
  //const [selected, setSelected] = useState("dragon");
  const [selected, setSelected] = useState(["aberration","5"]);
  const [monster, setMonster] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => setIsLoading(!isLoading);
  const ref = useRef(true);
  /* 
  When page loads fetch all the monster types
  to populate the dropdown list
  */
  useEffect(() => {

    axios.get('/api/monster_types')
    .then((res) => setOptions(res.data))
    
  }, []);
  useEffect(() => {

    axios.get('/api/challenge_ratings')
    .then((res) => setCr(res.data))
    
  }, []);

  useEffect(() => {
    const firstRender = ref.current;
    if(firstRender){
      ref.current = false;
      fetchData();
    }
  })

  /* 
  When user selects another monster from the
  dropdown list fetch a random monster of that type
  
  This changes the monster as soon as something else is picked on the
  dropdown, do we want that or should it only change when button is clicked

  useEffect(() => {
    const fetchData = () => {
      axios.get(`/api/monster/${selected[0]}/${selected[1]}`)
      .then((res) => setMonster(res.data))
    }

    fetchData();
  }, [selected])
*/

  /* 
  This is the same function as is inside the previous useEffect,
  this one is used for the handleSubmit. When a new monster is selected in the dropdown list
  a new random monster is fetched, you can click the submit button to get another random monster of
  that same type.

  When the page first loads it fires the submit
  for some reason

    TODO: Consider should it initially be set to None
          or is it a good UX letting it
  */

  const fetchData = () => {
    /*
     EDGE CASE:  When a monster with challenge ratings 1/4, 1/8
     the url ends up being: /api/monster/type/1/4 which of course does not exist
    */
    setIsLoading(true);
    axios.get(`/api/monster/${selected[0]}/${selected[1]}`)
      .then((res) => setMonster(res.data))
      .then(() => setIsLoading(false));
  }

  const handleSubmit = (evt) => {
    
    evt.preventDefault();
    setSelected([evt.target.monster.value, evt.target.monsterCR.value])
    fetchData();
    
    
  }
  
  /*
  TODO: Þarf að finna einfalda leið fyrir tvö select. 
  Þegar annað breytist t.d monster verður Dragon þurfum við líka Challenge rating
  þannig selected er á forminu:
      setSelected(['dragon',10])
  */
  const handleChange = (evt) => {
    //console.log(evt.target.monster);
    //setSelected(evt.target);
  }
  
  return (
    <div className="container p-2" data-testid="app-container">
      <Header title="Monster Finder" options={options} crOptions={crOptions} handleSubmit={handleSubmit} handleChange={handleChange} />
      
      {/*<div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
  </div>*/}
    {isLoading ? (
      <div className="d-flex justify-content-center p-4">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
    </div>) :   <Monster monster={monster}  />}
    
    </div>
  );
}

export default App;
