import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Netflix.png"




const Header = (props) => {

    const navigate = useNavigate()


    return (
        <HeaderContainer>
            <div className='logo'>
                <img src={logo}
                alt='logo' />
            </div>

            <button onClick={()=>navigate(props.login ? "/login" : "/signup" ) }>
                {props.login ? "Log in" : "Sign Up" }
            </button>
        </HeaderContainer>
    );
};


const HeaderContainer =styled.div`

  display : flex;
  justify-content : space-between;
  align-items : center;
  padding: 2rem 4rem;
  
  .logo {
    img {
    
        height: 3rem;
        cursor: pointer;
    }
  }

  button {
    border: none;
    background-color: red;
    padding: .5rem 1rem;
    cursor: pointer;
    color: white;
    border-radius: .3rem;
    font-size: 1rem;

  }
  button:hover {
    background-color: rgb(150, 29, 29);
  }

`

export default Header;