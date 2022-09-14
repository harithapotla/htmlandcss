import logo from './logo.svg';
import './App.css';
import Countries from './Countries';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="betterview">
    <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/countries">Countries</Link>
    <Outlet></Outlet>
    </div>
  )
}

export default App;
