import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';


const DoorContainer = styled.div`
    width: 311px;
    height: 311px;
  margin: 2% auto;

  ${'' /* mobile: w: 333px, h: 539px */}
`;

class Door extends Component {
    render() {
        return (
            <DoorContainer>


            </DoorContainer>
        );
    }
}

export default Door;
