import React from 'react';
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { fetchGenres } from '../features/movieSlice';

//components
import Card from '../components/Card';
import TopNav from '../components/TopNav';
import styled from "styled-components"

const Neflix = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = ()=> {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return ()=> (window.onscroll = null)
    }

    const navigate = useNavigate();
    
    const dispatch = useDispatch();
useEffect(()=> {
  dispatch(fetchGenres())
}, [])


    return (
        <Container>
             
        <div className='hero'>
             <TopNav isScrolled={isScrolled} />
        <img
        className="background-image"
        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
        alt="hero"
      />
       <div className='container'>
            <div className='title'>
                <h1>Super man</h1>
                <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu
            </p>
            </div>
            <div className='buttons'>
                <button className='playbtn' onClick={()=>navigate('/player')}>Play</button>
                <button className='morebtn'>More</button>
            </div>
        </div>
    </div>
       <Card />

        </Container>
    );
};

const Container = styled.div`
 .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }

      .playbtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .morebtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }
`


export default Neflix;