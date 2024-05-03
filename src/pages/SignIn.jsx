import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PrivateRoute from "../components/PrivateRoute";

function SignIn() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleLogin = () => {
        if (email.trim() !== '' && password.trim() !== '') {
            setLoggedIn(true);
            navigate('/');
        } else {
            alert('Please input email and password');
        }
    };

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    return (
        <div className="signin-container">
            <div className="signin-left">
                <img className="nnpc-frame" src="/images/nnpc-frame.png" alt="" />
                <div className="welcome-coantiner">
                    <img src="/images/nnpc-logo.png" alt="" />
                    <h2 className="">
                        Welcome back
                    </h2>
                    <h5 className="text-center">
                        Sign in to stay connected.
                    </h5>
                </div>
                <div className="form-container">
                    <form action="">
                        <label htmlFor="email">Email 
                            <input type="text" 
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange} />
                        </label>
                        <label htmlFor="password">Password
                            <input type="password" 
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleChange} />
                        </label>
                    </form>

                    <div className="remember-container"> 
                        <div className="remember">
                            <input type="checkbox" name="remember" id="" />
                            <h6>Remember me</h6>
                        </div>
                        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>
                    
                    <button onClick={handleLogin}>Sign In</button>
              
                    <h5>Don’t have an account? <a href="">Contact your administrator</a></h5>
                </div>
            </div>

            <div className="signin-right">
                <img src="/images/nnpc-overlay.jpg" alt="" />
            </div>
            
            <div>
                <PrivateRoute loggedIn={loggedIn} />
            </div>
        </div>
    );
}

export default SignIn;
