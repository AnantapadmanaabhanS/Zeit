import { useState } from 'react';
import { Link } from "react-router-dom";


function Login() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
        const handleLogin = (e) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        
        if(password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        setError(""); 
        alert("Login successful!");
    };
        return (
            <div className="page">
               <div className="login-container">
                <h1>Zeit</h1>
                <h2>Login</h2>
            
           <form onSubmit={handleLogin}>    
            <label>Phone Number</label>
            <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g,""))}
            />
            
            <label>Passowrd</label>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error">{error}</p>}
            <p>
                <Link to="/forgot_password">
                Forgot Password?
                </Link>
            </p>

            <button type="submit">
                Login
            </button>
            <p>
                Don't have an account?{" "}
                <Link to="/register"> Register</Link>
            </p>

            </form>
            </div>
        </div>
    );

}

export default Login;