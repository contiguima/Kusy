import './App.css';
import Comprar from './pages/Comprar';
import Landing from './pages/Landing';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/comprar" element={<Comprar />} />
        
      </Routes>
     
    </div>
  );
}

export default App;
