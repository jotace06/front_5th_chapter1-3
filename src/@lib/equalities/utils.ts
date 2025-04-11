const isObject = (obj: unknown): obj is Record<string, unknown> => {
  if (typeof obj !== "object") return false;
  if (obj === null) return false;
  return true;
};

export function baseEquals(
  objA: unknown,
  objB: unknown,
  valueComparer: (a: unknown, b: unknown) => boolean,
): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) return false;
    return objA.every((v, idx) => valueComparer(v, objB[idx]));
  }

  if (isObject(objA) && isObject(objB)) {
    const aKeys = Object.keys(objA);
    const bKeys = Object.keys(objB);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((key) => valueComparer(objA[key], objB[key]));
  }

  return objA === objB;
}
