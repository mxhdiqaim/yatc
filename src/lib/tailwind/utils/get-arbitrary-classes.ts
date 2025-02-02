import { tailwindToCSSMap } from "../mapping";

export const getArbitraryClasses = (arbitraryClass: string[]) => {
  const [, property, value] = arbitraryClass;
  if (typeof tailwindToCSSMap[property] === "function") {
    const cssValue = tailwindToCSSMap[property](value);

    return cssValue;
  }
};
