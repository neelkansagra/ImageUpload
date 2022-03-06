import './App.css';
import ImageUpload from './ImageUpload.js'
import Loading from './Loading.js'
import Upload from './Upload';
import React, {useState} from 'react'


function App() {
  const [State, setState] = useState(0)

  if(State===0){
  return (
    <div><ImageUpload data={State} onDataChange={setState}/></div>
  );
  }
  else if(State ===1){
    return (
      <div><Loading /></div>
    );
  }
  else if(State === 2){
    return (
      <div><Upload /></div>
    );
  }
}

export default App;
