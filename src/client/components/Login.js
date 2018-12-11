import React from 'react'; 
import WaitingRoom from './WaitingRoom';


const Login = (props) => {
    return(
        <div>
            <h1>Welcome to Login</h1>
            <button onClick={() => {props.handleB()}}> Login </button> 
            {(props.toggle === true) ? 
                <WaitingRoom /> : <p>Loading....</p>
            }
        </div>
    );
}

export default Login; 



