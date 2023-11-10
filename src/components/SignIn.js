import React, { useState } from 'react';
import { LoginImage, Logo, GoogleIcon } from '../EntryFile/imagePath'
import { useNavigate } from 'react-router-dom';


const SignIn = (props) => {
    const navigate = useNavigate();
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");



    const handleSubmit = (e) => {
        if(Username === "admin" && Password === "123"){
            navigate('/home');
        }
        else{
            console.log("wrong credentials");
        }
        
        console.log(Username);
        console.log(Password);
    }


    return (

        <div className="main-wrapper">
            <div className="account-content">
                <div className="login-wrapper">
                    <div className="login-content">
                        <div className="login-userset">

                            {/* <div> 
                                  <div className="login-logo"> 
                                        <img src={Logo} alt="img" />
                                    </div> */}
                            <div className="login-userheading">
                                <h3>Sign In </h3>
                                <h4>Please Add Your Login Creadentials</h4>
                            </div>


                            <div className="form-login">
                                <label>Username</label>
                                <div className="form-addons">
                                    <input
                                        type="text"
                                        name="username"
                                        value={Username}
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend2" required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />

                                </div>
                            </div>

                            <div className="form-login">
                                <label>Password</label>
                                <div className="form-addons">
                                    <input
                                        type="password"
                                        name="password"
                                        value={Password}
                                        placeholder="Password"
                                        aria-describedby="inputGroupPrepend2" required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="form-login">
                            <div className="alreadyuser">
                                <h4>
                                    <span className="hover-a" onClick={() => navigate('/forgot')} >
                                        Forget Password?
                                    </span>
                                </h4>

                            </div>
                        </div>
                        <div className="form-login">
                            <button className="btn btn-login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleSubmit}>
                                Submit
                            </button>

                        </div>
                        <div className="form-setlogin pt-4" >
                            <h4>Or sign In with</h4>
                        </div>
                        <div className="form-sociallink-googlelogin" >
                            <img
                                src={GoogleIcon}
                                className="me-2"
                                alt="google"
                            />
                            <span style={{ lineHeight: '100%' }} onClick={() => window.open('http://www.google.com')}>Sign In with Google</span>
                        </div>
                        <div className="signinform text-center mt-4">
                            <h4>
                                <span className="hover-a " onClick={() => navigate('/signup')} >
                                    No account? Signup
                                </span>
                            </h4>
                        </div>

                    </div>
                </div>
                <div className="login-img">
                    <img src={LoginImage} alt="img" />
                </div>
            </div>
        </div>

    )
}



export default SignIn;
