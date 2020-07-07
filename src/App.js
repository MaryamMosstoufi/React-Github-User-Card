import React from 'react';
import axios from 'axios';
import './App.css';

import CardMaker from './components/CardMaker';


axios.get('https://api.github.com/users/MaryamMosstoufi')
  .then(response => {
    //get user api response
    console.log('user api response', response)

    // get followers api url
    console.log('followers api url', response.data.followers_url);

    axios.get(response.data.followers_url)
      .then(response => {
        // get followers api response
        console.log('followers api response',response.data);
      })
      .catch(error => {
        console.log("Error:", error);
      })

  })
  .catch(error => {
    console.log("Error:", error);
  })
function App() {
  return (
    <div className="App">
      <h1>React Github User Card</h1>
      <CardMaker/>
    </div>
  );
}

export default App;
