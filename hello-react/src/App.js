import logo from './logo.svg';
import './App.css';
import Countries from './Countries';
import { Link, Outlet } from 'react-router-dom';
import store from './store/store';
import Counter from './Counter';
import { Provider } from 'react-redux';
import Todo from './store/Todo';

function App() {
  return (
    <Provider store={store}>
    <div className="betterview">
    <Todo/>
    <Counter/>
    <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/countries">Countries</Link>
    <Outlet></Outlet>
    </div>
    </Provider>
  )
}

export default App;
