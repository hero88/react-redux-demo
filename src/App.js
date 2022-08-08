import { Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FinalForm } from './components/FinalForm';
import Home from './components/Home';
import ContactForm from "./components/ReduxForm";

function App() {
  const handleSubmit = values => console.log(values);
  return (
    <div className="App">
      <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='final-form' element={<FinalForm />}/>
        <Route path='redux-form' element={<ContactForm onSubmit={handleSubmit}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
