import './App.css';
import React from 'react';
import Paperbase from './Components/Profile_user/Paperbase';
import forms from './file.json'
function App() {
  const fs = require('fs');

  // If the file doesn't exist, the content will be an empty object by default.
  return (

    <div className="App">
      {/*  <button onClick={() =>forms[1].set("title","Form111")}> hey </button>
      <div>
        {forms[1].title}
      </div> */}

     {/*  <button onClick=
      {
        () => fs.readFile('./file.json', 'utf-8', (err, jsonString) => {
          if (err) {
            console.log(err);
          } else {
            const data = JSON.parse(jsonString);
            console.log(data);
          }
        })
      }>

      hey 
      </button> */}

      <Paperbase />  
    </div>

  );
}

export default App;
