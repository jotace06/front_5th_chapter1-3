import { isObject } from "./utils";

export function deepEquals<T>(objA: T, objB: T): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    return objA.every((v, idx) => deepEquals(v, objB[idx]));
  }

  if (isObject(objA) && isObject(objB)) {
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((key) => deepEquals(objA[key], objB[key]));
  }

  return objA === objB;
}
