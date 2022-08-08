import { Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FinalForm } from './components/FinalForm';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <div className="row mb-3 text-center">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='final-form' element={<FinalForm />}/>
      </Routes>
      
    </div>
  );
}

export default App;
