import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
        <div id="game_tablePanel">
            <table id="game_table">
                <tbody>
                {
                    this.props.data.map((row, index) => {
                        return (
                            <tr key={index}>
                                {
                                    row.map((ceil, key) => {
                                        return (
                                            <td style={{backgroundColor: ceil ? '#42D122' : '#f5f5f5'}} key={key}></td>
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
