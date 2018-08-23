import React from 'react';
import styled from 'styled-components';



const SplashContainer = styled.div`
position: absolute;
    width: 100%;
    height:100%;
    top:0px;
    left:0px;
  ${'' /* margin: 0 auto; */}
  background-color:rgba(111,111,111,0.7);
`;

const SplashImg = styled.img`
    width:82%;
    margin: 8% 10%;
`;

const Splash = (props) => {
    let splashing = true;
    
    return (
        <SplashContainer>
            <SplashImg src={`${props.splash}`} />
        </SplashContainer>
    );
}

export default Splash;
