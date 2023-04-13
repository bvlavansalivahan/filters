import { useState } from 'react';
import './App.css';
import Table from './Table';
import { Users }  from './Data';

function App() {
  const [query,setquery]=useState("");
  
  return (
    <div className="App">
      
      <Table data={Users}/>
    </div>
  ); 
}

export default App;
