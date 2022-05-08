import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='password' >Password</label>
                        <input type="password" name="password" id="" required />
                    </div>

                    <input className='form-submit' type="submit" value="Login" />

                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='other-option'>
                  <div>------------------------------</div>
                  <h4>Or</h4>
                  <div>------------------------------</div>
                </div>
                <button >Continue With Google</button>
            </div>
          

        </div>
    );
};

export default Login;