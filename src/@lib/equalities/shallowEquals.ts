import { baseEquals } from "./utils";

export function shallowEquals<T>(objA: T, objB: T): boolean {
  return baseEquals(objA, objB, (a, b) => a === b);
}
