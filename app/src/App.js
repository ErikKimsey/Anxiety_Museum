import React, { Component } from 'react';
import styled from 'styled-components';
import Museum from './components/Museum.js';
import ImageData from './ImageData.js';
import Splash from './components/Splash.js';
import './App.css';
import './index.css';
import splash from './assets/anx_white.svg';



const AppContainer = styled.div`
  width: 986px;
  height: 433px;
  margin: 4% auto;  
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      classy: ImageData,
      url: '',
      i1: '',
      body: document.querySelector('body'),
      trigger: false,
      splashImg: splash,
    }
  }

  componentDidMount() {
    console.log(this.state.body);
    
    this.setState({classy: ImageData});
    setTimeout(this.initDarkBody1, 1000);
  }

  initDarkBody1 = () => {
    // this.setState({ trigger: true });/
    this.state.body.classList.add('dark-body-1');
    setTimeout(this.initLightbody, 100);
  }

  initLightbody = () => {
    this.state.body.classList.add('dark-body-2');
    this.state.body.classList.remove('dark-body-1');
    setInterval(this.initFinalDark, 6000);
  }

  randomizeLightDark = () => {
    return Math.floor(Math.random() * Math.max(2));
  }

  initFinalDark = () => {
    let god = this.randomizeLightDark();
    if (god === 0) {
      this.state.body.classList.remove('dark-body-2');
      this.state.body.classList.add('dark-body-3');
      this.setState({ trigger: true });
    } else {
      this.state.body.classList.add('dark-body-2');
      this.state.body.classList.remove('dark-body-3');
      this.setState({ trigger: false });
    }
  }

  setImageToState = (arr) => {
    this.setState({ classy: arr });
  }

  render() {
    return (
      <AppContainer>
      {/* <Splash splash={this.state.splashImg} /> */}
        <Museum img1={this.state.i1} trigger={this.state.trigger} randomize={this.randomizeLightDark } imgArr={this.state.classy} />
      </AppContainer>
    );
  }
}

export default App;
