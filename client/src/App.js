import Header from './components/header/header';
import React, {useState, useEffect} from 'react';
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
  const [selected, setSelected] = useState(["dragon","10"]);
  const [monster, setMonster] = useState({});

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
    axios.get(`/api/monster/${selected[0]}/${selected[1]}`)
      .then((res) => setMonster(res.data))
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
      <Monster monster={monster} />
    </div>
  );
}

export default App;
