import { baseEquals } from "./utils";

export function deepEquals(objA: unknown, objB: unknown): boolean {
  return baseEquals(objA, objB, deepEquals);
}
