import { useEffect } from "react";

import { useRef } from "../../hooks";

export const useRenderCount = () => {
  const countRef = useRef(1);

  useEffect(() => {
    countRef.current++;
  });

  return countRef.current;
};
