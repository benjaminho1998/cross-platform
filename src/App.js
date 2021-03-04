import './App.sass';
import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home';

const App = () => {

  const hi = () => {
    return (
      <div>
        hellloooo
      </div>
    );
  }

  return (
    <div className="outer">
      <Topbar />
      <Home />
      {hi}
    </div>
  );
}

export default App;
