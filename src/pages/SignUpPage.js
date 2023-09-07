import React, {useState} from 'react';
import styled from "styled-components"
import BackGroundImage from '../components/BackGroundImage';
import Header from '../components/Header';


const SignUpPage = () => {

    const [showPassword, setShowpassword] = useState(false)

    return (
      
            <Container>
                         <BackGroundImage />
                <div className='content'>
                    <Header login />
                    <div className='body'>
                     <div className='text'>
                     <h1>
                        Unlimited films, TV programmes and more

                        </h1>
                        <h4>Watch anywhere. Cancel at any time.</h4>
                        <h6>
                        Ready to watch? Enter your email to create or restart your membership.
                        </h6>
                     </div>
                     <div className='form'>

                        {
                            showPassword ? (
                                <input type='password' placeholder='password' name='password' />
                            ) :
                            (
                                <input type='email' placeholder='email address' name='email' />
                            )
                        }
                       
                       {
                        !showPassword ? (
                            <button onClick={()=>setShowpassword(true)}>Get Started</button>
                        ) :
                        (
                            <button>Sign up</button>
                        )
                       }
                       
                     </div>
                    </div>

                </div>
            </Container>
       
    );
};

const Container=styled.div`
position: relative;

.content{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color: rgba(0,0,0,.79)
}
.body {
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

}

.text {
    text-align: center;
    width: 75%;
    color:#fff;
    font-size: 1.7rem;
    h1 {
      padding: .25rem;
    }

    h4 {
        color: #fff;
        font-size: 1.2rem;

    }
    h6 {
        color: #fff;
        font-size: 1rem;
    }

}


.form {
        display: grid;
        justify-content:center;
        width: 60%;
        grid-template-columns: ${({showPassword})=> showPassword ? "1fr 1fr" : "2fr 1fr"};
        input {
            color: rgb(185,185,178);
            padding: 1.2rem;
            font-size: 1.2rem;
            width: 45rem;
            background: rgba(27,27,27, .8);
            border: 1px solid rgb(185,185,178);
            border-radius: 3px;
            margin-right: 5px;
           
            &:focus {
                outline: none;

            }
        }
        button {
            padding: .5rem 1rem;
            background-color:rgb(229, 9, 20);
            border-radius: 3px;
            font-weight:700;
            border:none;
            cursor: pointer;
            color:#fff;
            font-size: 1.1rem;
            width:10rem;
            &:hover {
                background-color: rgb(150, 29, 29);
                transition: .2s ease-in-out;
            }
        }
        
        
    }
`

export default SignUpPage;