import React, { useState, useEffect } from "react";

function Grid() {
  const [roomba, setRoomba] = useState("5, 7");
  //   useEffect(() => {
  //     setRoomba([1, 1]);
  //   }, []);
  const grid = [];
  for (let i = 10; i >= 1; i--) {
    for (let j = 10; j >= 1; j--) {
      grid.push(
        <div
          className={roomba === `${i}, ${j}` ? "roomba cell" : "cell"}
          id={[i, j]}
          key={[i, j]}
        >
          {i},{j}
        </div>
      );
    }
  }

  // will have roomba conditional render when its position matches a cell id
  // use ref to targe

  console.log(grid);
  return <div className="grid">{grid}</div>;
}

export default Grid;
