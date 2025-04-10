export const isObject = (obj: unknown): obj is Record<string, unknown> => {
  if (typeof obj !== "object") return false;
  if (obj === null) return false;
  return true;
};
