import React from 'react';
import styled from "styled-components"
const BackGroundImage = () => {
    return (
       <BackgroundContainer>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/c9a8620c-2cb3-4c99-b7a3-85b9fa6d398f/NL-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='netflix'
        />
       </BackgroundContainer>
    );
};


const BackgroundContainer = styled.div`
    height : 100vh;
    width: 100%;
    img {
        height : 100vh;
        width: 100%;
    }
`


export default BackGroundImage;