import React, { Component } from 'react';
import Box from './Box';
import Time from './Time';
import BtnPanel from './BtnPanel';   

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: this.getInitialState(),
      year: 0
    }
  }

  getInitialState() {
    let initState = [];
    for(let i = 0; i < 480/15; i++){
      let arr = [];
      for(let j = 0; j < 600/15; j++){
         if(parseInt(Math.random()*100)%13==0){
            arr.push(1);
         }else{
            arr.push(0);
         }
       }
       initState.push(arr);
    }
    return initState;
  }

  render() {
    console.log(this.state)
    return (
      <div className="game_panel">
          <Box data={this.state.data} />
          <div className="game_btnPanel">
            <Time year='0' />
            <BtnPanel />
            <h4>Game of Life</h4>
          </div>
      </div>
    );
  }
}

export default App;
