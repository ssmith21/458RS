import React from 'react';
import '../Css/register.css';
const Signup = (props) => {
    return (
        <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>SmartLab System Sign up</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="name" onChange={props.inp} className="form-control" placeholder="Your Name *"/>
                            </div>
                            <div className="form-group">
                                <input type="number" id="email" onChange={props.inp} className="form-control" placeholder="Email *"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" id="pass" onChange={props.inp} className="form-control" placeholder="Your Password *"/>
                            </div>
                            <div className="form-group"> 
                            <br/>                              
                                <input type="radio" id='male' name='sexRadio'/>Admin
                                <input type="radio"  id='female' name='sexRadio'/>User                               
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <button type="button" onClick={props.add} className="btnSubmit">Submit</button>
                   
                </div>
            </div>
        </div>
    );
}

export default Signup;