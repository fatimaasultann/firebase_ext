import React from "react";
import app from '../firbase'
import { Link } from "react-router-dom";

const SignUp = ({history}) => {
  const SignUphandler = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign up Form</h1>
      <form onSubmit={SignUphandler}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      
      <div><Link to='/'>
          Sign-In?? </Link>
        </div>
    </div>
  );
};

export default SignUp;