import { parseArbitraryValue } from "../utils/parse-arbitrary-value";

export const dynamicProperties: Record<string, string | ((value?: string) => string)> = {
  // Dynamic property handlers
  "grid-rows": (value?: string) => (value ? `grid-template-rows: ${value};` : "grid-template-rows: none;"),
  "grid-cols": (value?: string) => (value ? `grid-template-columns: ${value};` : "grid-template-columns: none;"),
  font: (value?: string) => (value ? `font-family: ${parseArbitraryValue(value)};` : ""),
  gap: (value?: string) => (value ? `gap: ${parseArbitraryValue(value)};` : ""),
  p: (value?: string) => (value ? `padding: ${parseArbitraryValue(value)};` : ""),
  pb: (value?: string) => (value ? `padding-bottom: ${parseArbitraryValue(value)};` : ""),
  pl: (value?: string) => (value ? `padding-left: ${parseArbitraryValue(value)};` : ""),
  pr: (value?: string) => (value ? `padding-right: ${parseArbitraryValue(value)};` : ""),
  pt: (value?: string) => (value ? `padding-top: ${parseArbitraryValue(value)};` : ""),
  m: (value?: string) => (value ? `margin: ${parseArbitraryValue(value)};` : ""),
  mb: (value?: string) => (value ? `margin-bottom: ${parseArbitraryValue(value)};` : ""),
  ml: (value?: string) => (value ? `margin-left: ${parseArbitraryValue(value)};` : ""),
  mr: (value?: string) => (value ? `margin-right: ${parseArbitraryValue(value)};` : ""),
  mt: (value?: string) => (value ? `margin-top: ${parseArbitraryValue(value)};` : ""),
};
