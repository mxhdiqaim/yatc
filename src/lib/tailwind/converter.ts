import { ConvertTailwindToCSSOutput } from "./types";
import { generateColorUtilities, generateSpacingUtilities } from "./utils/generate-utilities";
import { mediaQueries, responsivePrefixes } from "./constants/media-queries";
import { tailwindToCSSMap } from "./mapping";
import { getArbitraryClasses } from "./utils/get-arbitrary-classes";

const REGEX_PARTERN = /^-?([a-z]+(?:-[a-z]+)*)-\[(.*)\]$/;

// Initialize utilities
generateSpacingUtilities();
generateColorUtilities();

export const convertTailwindToCSS = (classes: string): ConvertTailwindToCSSOutput => {
  const classArray = classes.trim().split(/\s+/);
  const cssRules: string[] = [];
  const unknownClasses: string[] = [];

  classArray.forEach((cls) => {
    // Handle responsive prefixes
    const hasResponsivePrefix = responsivePrefixes.some((prefix) => cls.startsWith(prefix));

    if (hasResponsivePrefix) {
      const [prefix, restOfClass] = cls.split(":");

      // Handle arbitrary values in responsive classes
      const arbitraryMatch = restOfClass.match(REGEX_PARTERN);
      if (arbitraryMatch) {
        const cssValue = getArbitraryClasses(arbitraryMatch);
        cssRules.push(`${mediaQueries[prefix]} { ${cssValue} }`);
        return;
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
      const arbitraryMatch = cls.match(REGEX_PARTERN);
      console.log("arbitraryMatch", arbitraryMatch);
      if (arbitraryMatch) {
        const cssValue = getArbitraryClasses(arbitraryMatch);

        if (cssValue) {
          cssRules.push(cssValue);

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
