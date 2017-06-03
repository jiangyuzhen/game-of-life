import React, { Component } from 'react';
import Box from './Box';
import Time from './Time';
import BtnPanel from './BtnPanel';
import { getInitialState, gotoNextGeneration } from './conway';   

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: getInitialState(),
      year: 0,
      editStatus: false
    }
  }

  componentDidMount() {
     this.start();
  }

  start() {
    let _self = this;
    let count = _self.state.year || 0;
    _self.Timer = setInterval(function(){
       _self.setState({data: gotoNextGeneration(_self.state.data)});
       _self.setState({year: ++count});
    },1000);
  }

  // 时间静止
  stop() {
    clearInterval(this.Timer);
  }

  // 时间流动
  run() {
    clearInterval(this.Timer);
    this.setState({editStatus: false});
    this.start();
  }

  // 自定义创建新的世纪
  create() {
    clearInterval(this.Timer);

    let new_state = this.state.data.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            return 0;
        });
    });
    console.log(new_state)
    this.setState({data: new_state});
    this.setState({year: 0});
    this.setState({editStatus: true});
  }

  changeTimer(time=1000) {
    clearInterval(this.Timer);
    var _self = this;
    _self.Timer = setInterval(function(){
       _self.setState({data: gotoNextGeneration(_self.state.data)});
       _self.setState({year: ++_self.state.year});
    },time);
  }

  handleClick(x, y) {
    if(this.state.editStatus){
      let new_state = this.state.data;
      new_state[x][y] = new_state[x][y] ? 0 : 1;
      this.setState({data: new_state});
    } 
  }

  render() {
    return (
      <div className="game_panel">
          <Box data={this.state.data} handleClick={(x, y) => this.handleClick(x, y)} />
          <div className="game_btnPanel">
            <Time year={this.state.year} />
            <BtnPanel stop={this.stop.bind(this)} 
                      run={this.run.bind(this)}  
                      create={this.create.bind(this)} 
                      handleQuick={this.changeTimer.bind(this, 500)}
                      handleNormal={this.changeTimer.bind(this, 1000)}
                      handleSlow={this.changeTimer.bind(this, 1500)} />
            <h4>Game of Life</h4>
          </div>
      </div>
    );
  }
}

export default App;
