import { useEffect } from "react";

import { useRef } from "../@lib/hooks";

export const useRenderCounter = () => {
  const countRef = useRef(1);

  useEffect(() => {
    countRef.current++;
  });

  return countRef.current;
};
