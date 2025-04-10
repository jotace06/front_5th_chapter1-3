import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList = [],
  _equals = shallowEquals,
): T {
  const memoRef = useRef<{
    value: undefined | T;
    deps: DependencyList;
    initialized: boolean;
  }>({
    value: undefined,
    deps: _deps,
    initialized: false,
  });

  if (!memoRef.current.initialized) {
    memoRef.current.value = factory();
    memoRef.current.initialized = true;
  }

  if (!_equals(memoRef.current.deps, _deps)) {
    memoRef.current.value = factory();
    memoRef.current.deps = [..._deps];
  }

  return memoRef.current.value as T;
}
