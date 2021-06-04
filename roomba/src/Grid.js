import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

function Grid() {
  const { position } = useGlobalContext();
  const grid = [];
  for (let i = 10; i >= 1; i--) {
    for (let j = 10; j >= 1; j--) {
      grid.push(
        <div
          className={
            // toString to make comparison work
            position.toString() === `${i},${j}` ? "roomba cell" : "cell"
          }
          id={[i, j]}
          key={[i, j]}
        >
          {i},{j}
        </div>
      );
    }
  }
  return <div className="grid">{grid}</div>;
}

export default Grid;
