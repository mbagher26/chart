import './App.css';
import { useState } from 'react';
import Chart from './components/chart/chart';
import Tabel from './components/table/table';

function App() {

  const [data, setData] = useState([]);
  
  return (
    <div className="App">
      <Tabel setData={setData}/>
      <Chart data={data}/>
    </div>
  );
}

export default App;