
import './App.css';
import Encabezamiento from './components/compartidos/Encabezamiento';
import Pie from './components/compartidos/Pie';
import Principal from './components/compartidos/Principal';

function App() {
  return (
    <div className="App">
    <Encabezamiento />
    <Principal />
    <Pie />
    </div>
  );
}

export default App;
