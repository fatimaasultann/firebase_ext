import React, {useState ,useEffect} from "react";
import app from '../firbase'
import { Link } from "react-router-dom";


const SignIn = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = async (event,email, password) => {
                event.preventDefault();
                try {
                    await app.auth().signInWithEmailAndPassword(email, password);

                    window.localStorage.setItem('isLogin',true);
                    window.localStorage.setItem('email', email );
                    history.push("/dashboard");
                    
                  } catch (error) {
                    alert(error);
                  }
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
          if(name === 'email') {
              setEmail(value);
          }
          else if(name === 'Password'){
            setPassword(value);
          }
      };
      useEffect(() => {
            if (window.localStorage.getItem('isLogin')=='true') {    
              history.push("/dashboard");
      }
      },[]);

  return (
    <div >
      <h1 >Sign In</h1>
        <form >
          <label>Email</label>
          <input type="email"  name="email" value = {email} id="userEmail" onChange = {(event) => onChangeHandler(event)} />
          <label>  Password: </label>
          <input type="password" name="Password" value = {password}  id="userPassword"  onChange = {(event) => onChangeHandler(event)} />
          <button  onClick = {(event) => {signInHandler(event, email, password)}}> Sign in </button>
        </form>
        <div><Link to='/signup'>
          Sign-Up?? </Link>
        </div>
    </div>
  );
};
export default SignIn;

// abc111@outlook.com abc111
// anum123@gmail.com admin110
// fatima123@gmail.com admin@110