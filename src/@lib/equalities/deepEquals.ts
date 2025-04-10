import { baseEquals } from "./utils";

export function deepEquals<T>(objA: T, objB: T): boolean {
  return baseEquals(objA, objB, deepEquals);
}
