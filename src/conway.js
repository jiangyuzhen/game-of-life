const getInitialState = () => {
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

const gotoNextGeneration = (grid) => {
    return grid.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            let aliveNeighborNumber = calculateAliveNeighborNumber(rowIndex, colIndex, grid);
            return getNextState(grid[rowIndex][colIndex], aliveNeighborNumber);
        });
    });
};

const getNextState = (currentState, aliveNeighborNumber) => {
    return [0, 0, currentState, 1, 0, 0, 0, 0][aliveNeighborNumber];
};

const NEIGHBOR_INDEX = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
const calculateAliveNeighborNumber = (rowIndex, colIndex, grid) => {
    return NEIGHBOR_INDEX.reduce((acc, val) => {
        let newRowIndex = rowIndex + val[0];
        let newColIndex = colIndex + val[1];
        return withinIndex(newRowIndex, newColIndex, grid) ? acc + grid[newRowIndex][newColIndex] : acc;
    }, 0);
};

const withinIndex = (rowIndex, colIndex, grid) => {
    return rowIndex >= 0 && rowIndex < grid.length
        && colIndex >= 0 && colIndex < grid[rowIndex].length;
};

module.exports = {
    getInitialState,
    gotoNextGeneration
};