import Header from './components/header/header';
import React, {useState, useEffect} from 'react';
import Monster from './components/monster/monster';

/* 
App function is the single source of truth and passes
data down to child components
*/
function App() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("dragon");
  const [monster, setMonster] = useState({});

  /* 
  When page loads fetch all the monster types
  to populate the dropdown list
  */
  useEffect(() => {
    fetch('/api/monster_types')
    .then((res) => res.json())
    .then((data) => setOptions(data))
    
  }, []);

  /* 
  When user selects another monster from the
  dropdown list fetch a random monster of that type
  */
  useEffect(() => {
    const fetchData = () => {
      fetch(`/api/random_monster/${selected}`)
      .then((res) => res.json())
      .then((data) => setMonster(data))
    }

    fetchData();
  }, [selected])

  /* 
  This is the same function as is inside the previous useEffect,
  this one is used for the handleSubmit. When a new monster is selected in the dropdown list
  a new random monster is fetched, you can click the submit button to get another random monster of
  that same type.
  */
  const fetchData = () => {
    fetch(`/api/random_monster/${selected}`)
    .then((res) => res.json())
    .then((data) => setMonster(data))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchData();
  }
  const handleChange = (evt) => {
    setSelected(evt.target.value);
  }

  return (
    <div className="container p-2" data-testid="app-container">
      <Header title="Monster Finder" options={options} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Monster monster={monster} />
    </div>
  );
}

export default App;
