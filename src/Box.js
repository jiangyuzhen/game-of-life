import React, { Component } from 'react';

class Box extends Component {
  render() {
      console.log(this.props.data)
    return (
        <div id="game_tablePanel">
            <table id="game_table">
                <tbody>
                {
                    this.props.data.map((row, index) => {
                        return (
                            <tr key={`tr-${index}`}>
                                {
                                    row.map((ceil, key) => {
                                        return (
                                            <td onClick={() => this.props.handleClick(index, key)} style={{backgroundColor: ceil ? '#42D122' : '#f5f5f5'}} key={`tr-${key}`}></td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
  }
}

export default Box;
