import './App.css';
import VegContainer from './components/VegContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <VegContainer />
        </div>
      </Provider>
  );
}

export default App;
