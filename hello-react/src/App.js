import logo from './logo.svg';
import './App.css';
import Countries from './Countries';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="betterview">
    <a href="/home">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/countries">Countries</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/home">Homeeee</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/countries">Countriesssss</Link>
    <Outlet></Outlet>
    </div>
  )
}

export default App;
