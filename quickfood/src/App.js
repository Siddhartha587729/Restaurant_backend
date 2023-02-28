import './App.css';
import Home from './screens/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Sign from './screens/Sign';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Sign/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
