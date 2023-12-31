import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/insuranceplans' Component={<Signup />}/>
      <Route  path='/login' Component={<Login />}/>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
