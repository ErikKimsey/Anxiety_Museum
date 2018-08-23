import React from 'react';
import styled from 'styled-components';



const FrameContainer = styled.div`
    width: 311px;
    height: 311px;
  margin: 2% auto;
  box-shadow: inset 0px 8px 17px #A0566C;

  ${'' /* mobile: w: 333px, h: 539px */}
`;

const Sky1 = styled.img`
    width:100%;
    box-shadow: 0px 5px 10px #A0566C;
`;

const Frame = (props) => {
    return (
        <FrameContainer>
            <Sky1 src={`${props.initImg}`} />
        </FrameContainer>
    );
}

export default Frame;
