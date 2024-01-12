import React from "react";

let uniqueId = 0;
const getUniqueId = () => ++uniqueId;

function useUniqueId() {
  const idRef = React.useRef<string>();

  if (idRef.current === undefined) {
    idRef.current = String(getUniqueId());
  }

  return idRef.current;
}

export default React.useId ?? useUniqueId;
