import { Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
// import Signup from "./Pages/Signup";
// import Header from './Components/Header';
// import './App.css';

function App() {
  return (
    <div className="App">

 
              <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
    {/* <Route path="/register" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  */}
   

    </Routes>
     
    </div>
  );
}

export default App;
