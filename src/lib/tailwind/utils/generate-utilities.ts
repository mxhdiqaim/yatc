import { colors } from "../constants/colors";
import { spacing } from "../constants/spacing";
import { tailwindToCSSMap } from "../mapping";

export const generateSpacingUtilities = () => {
  // Padding
  Object.entries(spacing).forEach(([key, value]) => {
    tailwindToCSSMap[`p-${key}`] = `padding: ${value};`;
    tailwindToCSSMap[`px-${key}`] = `padding-left: ${value}; padding-right: ${value};`;
    tailwindToCSSMap[`py-${key}`] = `padding-top: ${value}; padding-bottom: ${value};`;
    tailwindToCSSMap[`pt-${key}`] = `padding-top: ${value};`;
    tailwindToCSSMap[`pr-${key}`] = `padding-right: ${value};`;
    tailwindToCSSMap[`pb-${key}`] = `padding-bottom: ${value};`;
    tailwindToCSSMap[`pl-${key}`] = `padding-left: ${value};`;
  });

  // Margin
  Object.entries(spacing).forEach(([key, value]) => {
    tailwindToCSSMap[`m-${key}`] = `margin: ${value};`;
    tailwindToCSSMap[`mx-${key}`] = `margin-left: ${value}; margin-right: ${value};`;
    tailwindToCSSMap[`my-${key}`] = `margin-top: ${value}; margin-bottom: ${value};`;
    tailwindToCSSMap[`mt-${key}`] = `margin-top: ${value};`;
    tailwindToCSSMap[`mr-${key}`] = `margin-right: ${value};`;
    tailwindToCSSMap[`mb-${key}`] = `margin-bottom: ${value};`;
    tailwindToCSSMap[`ml-${key}`] = `margin-left: ${value};`;
  });
};

export const generateColorUtilities = () => {
  Object.entries(colors).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      tailwindToCSSMap[`bg-${colorName}-${shade}`] = `background-color: ${value};`;
      tailwindToCSSMap[`text-${colorName}-${shade}`] = `color: ${value};`;
      tailwindToCSSMap[`border-${colorName}-${shade}`] = `border-color: ${value};`;
    });
  });
};
