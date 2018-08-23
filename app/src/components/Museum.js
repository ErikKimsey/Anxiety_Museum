import React, { Component } from 'react';
import styled from 'styled-components';
import Frame from './Frame.js';

const MuseumContainer = styled.div`
    width: 986px;
    height: 433px;
    box-shadow: inset 0px 8px 17px #A0566C;
    display:flex;
    flex-flow:row;
    justify-content: space-around;
    align-items:center;
  ${'' /* mobile: w: 333px, h: 539px */}
`;

class Museum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classy: [],
            canvas1: props.imgArr[0].url,
            canvas2: props.imgArr[1].url,
        }
    }

    componentDidMount() {
        this.setState({classy: this.props.imgArr});
        window.setTimeout(this.intervalDisplay, 3100);
    }

    intervalDisplay = () => {
        window.setInterval(this.setImage, 50)
    }

    initSkyImgs = (i) => {
        return this.state.classy[i];
    }

    getRandomImg = () => {
        let i = Math.floor(Math.random() * this.props.imgArr.length);
        return this.getWhichCanvas(this.props.imgArr[i].url);
    }

    getWhichCanvas = (img) => {
        let i = Math.floor(Math.random() * 2);
        if( i === 0 ){
            this.setState({ canvas1: img })
        } else {
            this.setState({ canvas2: img })
        }
    }

    setImage = () => {
        this.getRandomImg();
    }

    render() {
        
        return (
            <MuseumContainer>
                <Frame initImg={require(`../assets/${this.state.canvas1}`)}/>

                <Frame initImg={require(`../assets/${this.state.canvas2}`)}/>
            </MuseumContainer>
        );
    }
}

export default Museum;
