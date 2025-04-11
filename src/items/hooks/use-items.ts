import { useState } from "react";

import { useCallback } from "../../@lib";
import { Item } from "../types";
import { generateItems } from "../../utils";

interface UseItemsOptions {
  initialCount?: number;
  count?: number;
}

export function useItems({
  initialCount = 1000,
  count = 1000,
}: UseItemsOptions = {}) {
  const [items, setItems] = useState<Item[]>(() => generateItems(initialCount));

  const addItems = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(count, prevItems.length),
    ]);
  }, [count]);

  return {
    items,
    addItems,
  };
}
