import { ConvertTailwindToCSSOutput } from "./types";
import { generateColorUtilities, generateSpacingUtilities } from "./utils/generate-utilities";
import { mediaQueries } from "./constants/media-queries";
import { tailwindToCSSMap } from "./mapping";

// Initialize utilities
generateSpacingUtilities();
generateColorUtilities();

export const convertTailwindToCSS = (classes: string): ConvertTailwindToCSSOutput => {
  const classArray = classes.trim().split(/\s+/);
  const unknownClasses: string[] = [];
  const cssRules: string[] = [];

  classArray.forEach((cls) => {
    // Handle responsive prefixes
    const responsivePrefixes = ["sm:", "md:", "lg:", "xl:", "2xl:"];
    const hasResponsivePrefix = responsivePrefixes.some((prefix) => cls.startsWith(prefix));

    if (hasResponsivePrefix) {
      const [prefix, restOfClass] = cls.split(":");

      // Handle arbitrary values in responsive classes
      const arbitraryMatch = restOfClass.match(/^([a-z-]+)\[(.*)\]$/);
      console.log("arbitraryMatch", arbitraryMatch);
      if (arbitraryMatch) {
        const [, property, value] = arbitraryMatch;
        if (typeof tailwindToCSSMap[property] === "function") {
          const cssValue = tailwindToCSSMap[property](value);
          cssRules.push(`${mediaQueries[prefix]} { ${cssValue} }`);
          return;
        }
      }

      // Handle regular responsive classes
      if (tailwindToCSSMap[restOfClass]) {
        const cssValue =
          typeof tailwindToCSSMap[restOfClass] === "function"
            ? tailwindToCSSMap[restOfClass]()
            : tailwindToCSSMap[restOfClass];
        cssRules.push(`${mediaQueries[prefix]} { ${cssValue} }`);
      } else {
        unknownClasses.push(cls);
      }
    } else {
      // Handle arbitrary values
      const arbitraryMatch = cls.match(/^([a-z-]+)\[(.*)\]$/);
      if (arbitraryMatch) {
        const [, property, value] = arbitraryMatch;
        if (typeof tailwindToCSSMap[property] === "function") {
          cssRules.push(tailwindToCSSMap[property](value));
          return;
        }
      }

      // Handle regular classes
      if (tailwindToCSSMap[cls]) {
        const cssValue = typeof tailwindToCSSMap[cls] === "function" ? tailwindToCSSMap[cls]() : tailwindToCSSMap[cls];
        cssRules.push(cssValue);
      } else {
        unknownClasses.push(cls);
      }
    }
  });

  const css = cssRules.join(" ");

  return { css, unknownClasses };
};
