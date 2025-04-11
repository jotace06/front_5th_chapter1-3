import { baseEquals } from "./utils";

export function shallowEquals(objA: unknown, objB: unknown): boolean {
  return baseEquals(objA, objB, (a, b) => a === b);
}
