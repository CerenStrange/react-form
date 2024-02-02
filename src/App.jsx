import { useState } from 'react';
import TaskForm from './TaskForm';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className="container">
      <h1>Yapacaklarını Yaz</h1>
      <TaskForm />

      
    </div>
     <hr />
     <p className='container'>&copy;Ceren Çelik</p>
   </>
  )
}

export default App
