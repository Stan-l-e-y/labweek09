import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [studentId, setStudentId] = useState(101339387);
  const [studentName, setStudentName] = useState('Stanley Tsonev');
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to FullStack Development - I</h1>
      <h2>React JS Programming Week09 Lab exercise</h2>
      <h3>{studentId}</h3>
      <h4>{studentName}</h4>
      <p>George Brown College, Toronto</p>
    </div>
  );
}

export default App;
