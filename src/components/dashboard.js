import React ,{ useEffect}from 'react'
import app from '../firbase'

function Dashboard({history}) {
    console.log(window.localStorage.getItem('email'))
    console.log(window.localStorage.getItem('isLogin'))
    const singoutHandler=()=>{
        app.auth().signOut().then(() => {            
            window.localStorage.setItem('isLogin', false);            
            window.localStorage.setItem('email', '' );
            history.push("/");
        })
        .catch(e=>{
        console.error('Sign Out Error', e);
        }); 
    }
        useEffect(() => {
            if (window.localStorage.getItem('isLogin')==='false')
                history.push("/");
        },[])
    return (
        <div>
            <h1>Dashboard {window.localStorage.getItem('isLogin'),window.localStorage.getItem('email')}</h1>
            <button onClick={singoutHandler }>Logout</button>
        </div>
    )
}

export default Dashboard
