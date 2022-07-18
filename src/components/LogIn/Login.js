import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="form login">
            <div className="form-content">
                <header>Login</header>
                <form action="#">
                    <div className="field input-field">
                        <input type="email" placeholder="Email" className="input" />
                    </div>
                    <div className="field input-field">
                        <input type="password" placeholder="Password" className="password" />
                    </div>
                    <div className="field button-field">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className="form-link">
                    <span
                    >Don't have an account?
                     <Link to="/signup">Sign Up</Link>
                    </span>
                </div>
            </div>
      </div>
    )
}

export default Login