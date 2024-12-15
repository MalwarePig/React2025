import logo from './logo.svg';
import './App.css';
import HolaMundo,{AdiosMundo} from './components/HolaMundo/HolaMundo';
import Saludar from './components/Saludar/Saludar';
import BtnSaludar from './components/BtnFuncion/BtnFuncion';
import BtnUseHook from './components/BtnHooks/BtnUseHooks';

function App() {
  const Myinfo = {
    Name: 'Sergio',
    Age: 32,
  }

  function ConsoleSaludo(name) {
    console.log(`La consola saluda a ${name}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         
          <HolaMundo Info = {Myinfo} />
          <Saludar name ="Yumiko" edad='34'/>
          <BtnSaludar MyFuncion= {ConsoleSaludo} Info = {Myinfo} />
          <BtnUseHook />
      </header>
    </div>
  );
}

export default App;
