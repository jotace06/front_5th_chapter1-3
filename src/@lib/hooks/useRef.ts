import { useState } from "react";

export function useRef<T>(initialValue: T): { current: T } {
  const [container] = useState({ current: initialValue });

  return container;
}
