// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { AbouPage } from './Components/AbouPage';
import { RouterChange } from './Components/RouterChange';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavLink to={"/"}>About</NavLink>
          <NavLink to={"/RouterChanger"}>Router</NavLink>
          <NavLink to={"/NotFound"}>Notfound</NavLink>
     <Routes>
      <Route path='/' element={<AbouPage/>}/>
      <Route path='/RouterChanger' element={<RouterChange/>}/>
      <Route path='/NotFound' element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
