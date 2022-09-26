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
  const [selected, setSelected] = useState(["aberration","0"]);
  const [monster, setMonster] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
    fetchData();
  }
  
  const handleChange = (evt) => {
    if(evt.target.name === 'monster'){
      setSelected([evt.target.value, selected[1]]);
    }
    else {
      setSelected([selected[0], evt.target.value]);
    }
    
  }
  
  return (
    <div className="container p-2" data-testid="app-container">
      <Header title="Monster Finder" options={options} crOptions={crOptions} handleSubmit={handleSubmit} handleChange={handleChange} />
      
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
