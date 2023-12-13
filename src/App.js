
import './App.css';
import { useState } from 'react';
import Quizscreen from './components/Quizscreen';
import Joinscreen from './components/Joinscreen';
import Navbar from './components/Navbar';

function App() {
  const [quizstarted, setquizstared] = useState(true)
   const start=()=>
    setquizstared(true);
  
  return (
    <div className='p-2'>
      <Navbar/>
      {
        quizstarted?(
          <Quizscreen retry={()=>setquizstared(true)}/>
        ):(
          <Joinscreen retry={()=>setquizstared(false)}/>
        )
      }
    </div>
  );
}

export default App;
