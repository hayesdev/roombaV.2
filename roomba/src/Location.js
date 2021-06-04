import React from "react";
import { useGlobalContext } from "./context";

function Location() {
  const { position } = useGlobalContext();
  return (
    <div>
      Location: {position[0]}, {position[1]}
    </div>
  );
}

export default Location;
