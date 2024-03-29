import React from "react";
import { useGlobalContext } from "./context";

function Location() {
  const { position, hits, history } = useGlobalContext();
  return (
    <div>
      History: {history.join(", ")}
      <br />
      Location: {position[0]}, {position[1]}
      <br />
      Walls hit: {hits}
    </div>
  );
}

export default Location;
