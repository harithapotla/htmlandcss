import logo from './logo.svg';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import Todo from './store/Todo';

function App() {
  return (
    <Provider store={store}>
    <div className="betterview">
   <h1> App component </h1>
   <Todo/>
   <Counter/>
    </div>
    </Provider>
  );
}

export default App;
