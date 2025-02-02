import { parseArbitraryValue } from "../utils/parse-arbitrary-value";

export const dynamicProperties: Record<string, string | ((value?: string) => string)> = {
  /*
   *Dynamic property handlers
   */

  // grid
  "col-span": (value?: string) =>
    value ? `grid-column: span ${parseArbitraryValue(value)} / span ${parseArbitraryValue(value)};` : "",
  "col-start": (value?: string) => (value ? `grid-column-start: ${parseArbitraryValue(value)};` : ""),
  "col-end": (value?: string) => (value ? `grid-column-end: ${parseArbitraryValue(value)};` : ""),

  "row-span": (value?: string) =>
    value ? `grid-row:  span ${parseArbitraryValue(value)} / span ${parseArbitraryValue(value)};` : "",
  "row-start": (value?: string) => (value ? `grid-row-start: ${parseArbitraryValue(value)};` : ""),
  "row-end": (value?: string) => (value ? `grid-row-end: ${parseArbitraryValue(value)};` : ""),

  "grid-rows": (value?: string) => (value ? `grid-template-rows: ${parseArbitraryValue(value)};` : ""),
  "grid-cols": (value?: string) => (value ? `grid-template-columns: ${parseArbitraryValue(value)};` : ""),
  "auto-cols": (value?: string) => (value ? `grid-auto-columns: ${parseArbitraryValue(value)};` : ""),
  font: (value?: string) => (value ? `font-family: ${parseArbitraryValue(value)};` : ""),
  gap: (value?: string) => (value ? `gap: ${parseArbitraryValue(value)};` : ""),

  // padding
  p: (value?: string) => (value ? `padding: ${parseArbitraryValue(value)};` : ""),
  py: (value?: string) =>
    value ? `padding-top: ${parseArbitraryValue(value)}; padding-bottom: ${parseArbitraryValue(value)};` : "",
  px: (value?: string) =>
    value ? `padding-left: ${parseArbitraryValue(value)}; padding-right: ${parseArbitraryValue(value)};` : "",
  pt: (value?: string) => (value ? `padding-top: ${parseArbitraryValue(value)};` : ""),
  pr: (value?: string) => (value ? `padding-right: ${parseArbitraryValue(value)};` : ""),
  pb: (value?: string) => (value ? `padding-bottom: ${parseArbitraryValue(value)};` : ""),
  pl: (value?: string) => (value ? `padding-left: ${parseArbitraryValue(value)};` : ""),

  // margin
  m: (value?: string) => (value ? `margin: ${parseArbitraryValue(value)};` : ""),
  my: (value?: string) =>
    value ? `margin-top: ${parseArbitraryValue(value)}; margin-bottom: ${parseArbitraryValue(value)};` : "",
  mx: (value?: string) =>
    value ? `margin-left: ${parseArbitraryValue(value)}; margin-right: ${parseArbitraryValue(value)};` : "",
  mt: (value?: string) => (value ? `margin-top: ${parseArbitraryValue(value)};` : ""),
  mr: (value?: string) => (value ? `margin-right: ${parseArbitraryValue(value)};` : ""),
  mb: (value?: string) => (value ? `margin-bottom: ${parseArbitraryValue(value)};` : ""),
  ml: (value?: string) => (value ? `margin-left: ${parseArbitraryValue(value)};` : ""),
};
