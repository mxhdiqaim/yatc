import { TailwindMapping } from "../types";
import { layoutMapping } from "./layouts";
import { gridMapping } from "./grid";
import { spacingMapping } from "./spacing";
import { flexboxMapping } from "./flexbox";
import { typographyMapping } from "./typography";
import { sizingMapping } from "./sizing";
import { dynamicProperties } from "./dynamin-properties";
import { colorsMapping } from "./colors";

export const tailwindToCSSMap: TailwindMapping = {
  ...layoutMapping,
  ...gridMapping,
  ...spacingMapping,
  ...flexboxMapping,
  ...typographyMapping,
  ...sizingMapping,
  ...colorsMapping,
  ...dynamicProperties,
} as const;
