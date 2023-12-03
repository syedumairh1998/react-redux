import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store'
import Customer from './Customer';


function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Customer />
      </div>
    </Provider>
  );
}

export default App;
