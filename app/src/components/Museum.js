import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Frame from './Frame.js';

const MuseumContainer = styled.div`
    width: 986px;
    height: 433px;
    box-shadow: inset 0px 8px 17px #A0566C;
    box-shadow: ${props => props.darken ? "inset -10px -8px 27px #000" : "inset 10px 8px 17px #A0566C" };
    display:flex;
    flex-flow:row;
    justify-content: space-around;
    align-items:center;
    transition-delay: 0;
    transition-duration:1s;

`;

class Museum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classy: [],
            canvas1: props.imgArr[0].url,
            canvas2: props.imgArr[1].url,
            goDark: false,
        }
    }

    componentDidMount() {
        this.setState({classy: this.props.imgArr});
        // setInterval(this.goDarkGoLight, 1000);
        window.setTimeout(this.intervalDisplay, 1100);
    }

    intervalDisplay = () => {
        window.setInterval(this.setImage, 50)
        // this.setState({ goDark: true });
    }

    goDarkGoLight = () => {
        let dark = !this.state.goDark;
        // this.setState({ goDark: dark });
    }

    initSkyImgs = (i) => {
        return this.state.classy[i];
    }

    getRandomImg = () => {
        if(this.props.randomize() === 0) {
            this.setState({ canvas1: this.props.imgArr[0].url, canvas2: this.props.imgArr[1].url})
        } else {
            let i = Math.floor(Math.random() * this.props.imgArr.length);
            return this.getWhichCanvas(this.props.imgArr[i].url);
        }
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
            <MuseumContainer darken={this.props.trigger}>
                <Frame initImg={require(`../assets/${this.state.canvas1}`)}/>

                <Frame initImg={require(`../assets/${this.state.canvas2}`)}/>
            </MuseumContainer>
        );
    }
}

export default Museum;
