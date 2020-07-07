import React from 'react';
import axios from 'axios';
import './App.css';


axios.get('https://api.github.com/users/MaryamMosstoufi')
.then(response => {
  console.log(response)
  })
  .catch(error => {
    console.log("Error:", error);
  })
function App() {
  return (
    <div className="App">
      <h1>React Github User Card</h1>
    </div>
  );
}

export default App;
