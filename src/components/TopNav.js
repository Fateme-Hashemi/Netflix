import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/Netflix.png"

import { AiOutlineLogout } from "react-icons/ai";
import {onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utlis/firebase-auth';
import { useNavigate } from 'react-router-dom';


const TopNav = ({isScrolled}) => {
    const navLinks = [
        {name: "Home" , link: "/"},
        {name: "TV Show" , link: "/tv"},
        {name: "Movies" , link: "/movie"},
        {name: "My List" , link: "/list"},
    ]

    const navigate = useNavigate()
    
    onAuthStateChanged(firebaseAuth, (currentUser)=> {
        if(!currentUser) navigate ("/login")
    })
    return (

     <Container>
        <nav className={ `${isScrolled ? "scrolled" : "notscrolled"}` }>
        <div className='leftside'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            
                <ul className='links'>
                    {navLinks.map(({name, link})=> {
                        return (
                            <li key={name}>
                                <Link to={link} >{name}</Link>
                            </li>
                        )
                    })}
                </ul>
          
        </div>
        <div className='rightside'>
                   <button onClick={()=> signOut(firebaseAuth)} >
                   <AiOutlineLogout />
                   </button>
        </div>
        </nav>
     </Container>
    );
};



const Container = styled.div`


  nav{
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
   transition: 0.3s ease-in;
   .leftside{
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 5rem;

   .logo{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   img{
    width: 10rem;
    height: 2rem;
   }
  }
  .links{
    display: flex;
    list-style-type: none;
    gap: 3rem;
    li{
        a{
            color: white;
            text-decoration: none;
        }
    }
  }
}
.scrolled {
    display: flex;
    background-color: black;
}
.notscrolled {
    display: flex;
}

.rightside{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button{
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }&:focus{
        outline: none;
    }svg{
        color: white;
        font-size: 2rem;
    }
}
`

export default TopNav;

