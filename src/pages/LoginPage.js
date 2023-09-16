import React, {useState} from 'react';
import styled from "styled-components"
import BackGroundImage from '../components/BackGroundImage';
import Header from '../components/Header';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utlis/firebase-auth';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const navigate = useNavigate()


const logInHandle = async ()=> {
   try {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
   }
   catch (err){
        return err
   }
}

onAuthStateChanged(firebaseAuth, (currentUser)=> {
    if(currentUser) navigate ("/")
})

    return (
      <Wrapper>
        <BackGroundImage />
        <div className='container'>
        <Header />
            <div className='form-wrapper'>
            
            <div className='content'>
                <div className='title'>
                    <h1>Login</h1>
                </div>
                <div className='form'>
                    <input type='text' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <input type='password' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                    <button className='loginbtn' onClick={logInHandle}>Login</button>

                </div>

            </div>
            </div>
           
        </div>
      </Wrapper>
    );
};


const Wrapper = styled.div`
position: relative;
height:100vh;
    .container {
     position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color: rgba(0,0,0,.6);
    grid-template-columns: 15vh 85vh;

    }
    .form-wrapper {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        gap:2rem;
        height:85vh;
    }
    .content {
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        gap:2rem;
        background-color: rgba(0,0,0,.83);

        height:70vh;
        padding:2rem;
        color:white;
        border-radius:0.4rem;
        
    }
    .form {
        display:flex;
        flex-direction: column;
        gap:2rem
    
    }
    
    input {
            border-radius: .4rem;
            padding: .5rem 1rem;
            width: 25rem;
            height: 2.4rem;
            outline: none;
            
        }

        .loginbtn {
            padding: .5rem;
            padding: .5rem 1rem;
            background-color:rgb(229, 9, 20);
            border:none;
            cursor: pointer;
            border-radius: .4rem;
            height:3.4rem;
            color:white;
            font-weight:bolder;
            font-size: 1.5rem;

        }
        
`

export default LoginPage;