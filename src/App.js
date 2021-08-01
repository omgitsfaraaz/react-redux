import './App.css';
import TomatoContainer from './components/TomatoContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import PotatoContainer from './components/PotatoContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TomatoContainer />
        <PotatoContainer />
      </div>
    </Provider>
  );
}

export default App;
