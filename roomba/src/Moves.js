import React from "react";
import { useGlobalContext } from "./context";

function Moves() {
  const { up, down, left, right } = useGlobalContext();
  return (
    <div>
      <button onClick={up}>up</button>
      <button onClick={down}>down</button>
      <button onClick={right}>right</button>
      <button onClick={left}>left</button>
    </div>
  );
}

export default Moves;
