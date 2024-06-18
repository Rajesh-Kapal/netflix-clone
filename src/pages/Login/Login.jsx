import './Login.css';
import logo from '../../assets/logo.png'
import { useState } from 'react';
export function Login(){
    const [signState, setSignState]=useState("Sign In");
    return(
        <div className="login">
           <img src={logo} alt="" className='logol' />
            <div className="login-form">
            <h1>{signState}</h1>
            <form >
                {signState==="Sign Up"?<input type="text" placeholder="Enter your name" id="" />:<></>}
                <input type="email" placeholder="Enter your email" id="" />
                <input type="password" placeholder="Enter your password" id="" />
                <button>{signState}</button>
                <div className="form-help">
                    <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <label>Remember me</label>
                    </div>
                    <p>Need Help ?</p>
                </div>
            </form>
            <div className="form-switch">
                {signState==="Sign Up"?<p>Already have an account <span onClick={()=>{
                    setSignState("Sign In")
                }}>Sign In</span></p>:
                <p>New to Netflix <span onClick={()=>{
                    setSignState("Sign Up")
                }}>Sign Up</span></p>}
                
            </div>
            </div>
        </div>
    )
}