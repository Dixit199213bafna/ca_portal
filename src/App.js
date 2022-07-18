import { Link, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './components/LogIn/Login';
import SignUp from './components/SignUp/SignUp';
import Quentionare from "./components/Questionare/Quentionare";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>CA Portal</span>
        <nav className="app-link">
          <Link to="/login">Log In</Link> | {" "}
          <Link to="/signup">Sign Up</Link>
          <Link to="/questionare">Quentionare</Link>
        </nav>
      </header>
      <section className="app-content">
        <div className="app-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/questionare" element={<Quentionare />}></Route>
        </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
