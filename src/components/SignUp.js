import React  from "react";
import { LoginImage, GoogleIcon } from '../EntryFile/imagePath'
import { useNavigate } from 'react-router-dom';


const SignUp = (props) => {
    const navigate = useNavigate()
    return (
        
            <div className="main-wrapper">
            
                <div className="account-content">
                    <div className="login-wrapper">
                        <div className="login-content">
                            <div className="login-userset">
                                 {/* <div> 
                                     <div className="login-logo"> 
                                         <img src={Logo} alt="img" />
                                </div>  */}
                                    <div className="login-userheading">
                                        <h3>Create New Account</h3>
                                        <h4>Join us by sharing your owner details</h4>
                                    </div>
                                    <form >
                                        <div className="form-login">
                                            <label>Full Name </label>
                                            <div className="form-addons">

                                                <input
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                                <div className="iconify-position-signup">
                                                    <iconify-icon icon="ph:user" style={{ color: 'grey' }} ></iconify-icon>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-login">
                                            <label>Email </label>
                                            <div className="form-addons">
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                />
                                                <div className="iconify-position-signup">
                                                    <iconify-icon icon="tabler:mail" style={{ color: 'grey' }} ></iconify-icon>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-login">
                                            <label>Mobile </label>
                                            <div className="pass-group">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your Mobile Number "
                                                />
                                                <div className="iconify-position-signup">
                                                    <iconify-icon icon="ph:device-mobile-thin" style={{ color: 'grey' }} ></iconify-icon>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-login">
                                            <label>Password </label>
                                            <div className="pass-group">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your Password"
                                                />
                                                <div className="iconify-position-signup">
                                                    <iconify-icon icon="ph:device-mobile-thin" style={{ color: 'grey' }} ></iconify-icon>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-login">
                                            <button type="submit" className="btn btn-login" onClick={()=>navigate('/Home')}>
                                                Submit
                                            </button>
                                        </div>

                                        <div className="form-setlogin">
                                            <h4>Or sign up with</h4>
                                        </div>
                                        <div className="form-sociallink-googlelogin" onClick={() => window.open( 'http://www.google.com')} >
                                            <img src={GoogleIcon} className="me-2" alt="google" />
                                            Sign Up using Google
                                        </div>

                                    </form>
                                    <div className="signinform text-center mt-4">
                                        <h4>
                                           
                                            <span className="hover-a " onClick={()=>navigate('/signin')} >
                                            Already a user? Sign In
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
            </div>
    
    )
}

export default SignUp;
