import { parseArbitraryValue } from "../utils/parse-arbitrary-value";

export const dynamicProperties: Record<string, string | ((value?: string) => string)> = {
  /*
   *Dynamic property handlers
   */

  // grid
  "grid-rows": (value?: string) => (value ? `grid-template-rows: ${parseArbitraryValue(value)};` : ""),
  "grid-cols": (value?: string) => (value ? `grid-template-columns: ${parseArbitraryValue(value)};` : ""),
  "auto-cols": (value?: string) => (value ? `grid-auto-columns: ${parseArbitraryValue(value)};` : ""),
  gap: (value?: string) => (value ? `gap: ${parseArbitraryValue(value)};` : ""),
  "col-span": (value?: string) =>
    value ? `grid-column: span ${parseArbitraryValue(value)} / span ${parseArbitraryValue(value)};` : "",
  "col-start": (value?: string) => (value ? `grid-column-start: ${parseArbitraryValue(value)};` : ""),
  "col-end": (value?: string) => (value ? `grid-column-end: ${parseArbitraryValue(value)};` : ""),
  "row-span": (value?: string) =>
    value ? `grid-row:  span ${parseArbitraryValue(value)} / span ${parseArbitraryValue(value)};` : "",
  "row-start": (value?: string) => (value ? `grid-row-start: ${parseArbitraryValue(value)};` : ""),
  "row-end": (value?: string) => (value ? `grid-row-end: ${parseArbitraryValue(value)};` : ""),

  // typography
  font: (value?: string) => (value ? `font-family: ${parseArbitraryValue(value)};` : ""),
  text: (value?: string) => (value ? `font-size: ${parseArbitraryValue(value)};` : ""),

  // flexbox
  flex: (value?: string) => (value ? `flex: ${parseArbitraryValue(value)};` : ""),
  basis: (value?: string) => (value ? `flex-basis: ${parseArbitraryValue(value)};` : ""),
  grow: (value?: string) => (value ? `flex-grow: ${parseArbitraryValue(value)};` : ""),
  shrink: (value?: string) => (value ? `flex-shrink: ${parseArbitraryValue(value)};` : ""),
  order: (value?: string) => (value ? `order: ${parseArbitraryValue(value)};` : ""),

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

  // border
  border: (value?: string) => (value ? `border-width: ${parseArbitraryValue(value)};` : ""),
  "border-t": (value?: string) => (value ? `border-top-width: ${parseArbitraryValue(value)};` : ""),
  "border-r": (value?: string) => (value ? `border-right-width: ${parseArbitraryValue(value)};` : ""),
  "border-b": (value?: string) => (value ? `border-bottom-width: ${parseArbitraryValue(value)};` : ""),
  "border-l": (value?: string) => (value ? `border-left-width: ${parseArbitraryValue(value)};` : ""),
  "border-x": (value?: string) =>
    value ? `border-left-width: ${parseArbitraryValue(value)}; border-right-width: ${parseArbitraryValue(value)};` : "",
  "border-y": (value?: string) =>
    value ? `border-top-width: ${parseArbitraryValue(value)}; border-bottom-width: ${parseArbitraryValue(value)};` : "",
  "rounded-tl": (value?: string) => (value ? `border-top-left-radius: ${parseArbitraryValue(value)};` : ""),
  "rounded-tr": (value?: string) => (value ? `border-top-right-radius: ${parseArbitraryValue(value)};` : ""),
  "rounded-br": (value?: string) => (value ? `border-bottom-right-radius: ${parseArbitraryValue(value)};` : ""),
  "rounded-bl": (value?: string) => (value ? `border-bottom-left-radius: ${parseArbitraryValue(value)};` : ""),
  "rounded-t": (value?: string) =>
    value
      ? `border-top-left-radius: ${parseArbitraryValue(value)}; border-top-right-radius: ${parseArbitraryValue(value)};`
      : "",
  "rounded-r": (value?: string) =>
    value
      ? `border-top-right-radius: ${parseArbitraryValue(value)}; border-bottom-right-radius: ${parseArbitraryValue(
          value
        )};`
      : "",
  "rounded-b": (value?: string) =>
    value
      ? `border-bottom-right-radius: ${parseArbitraryValue(value)}; border-bottom-left-radius: ${parseArbitraryValue(
          value
        )};`
      : "",
  "rounded-l": (value?: string) =>
    value
      ? `border-top-left-radius: ${parseArbitraryValue(value)}; border-bottom-left-radius: ${parseArbitraryValue(
          value
        )};`
      : "",
  rounded: (value?: string) => (value ? `border-radius: ${parseArbitraryValue(value)};` : ""),
  "border-opacity": (value?: string) => (value ? `border-opacity: ${parseArbitraryValue(value)};` : ""),

  // sizing
  w: (value?: string) => (value ? `width: ${parseArbitraryValue(value)};` : ""),
  h: (value?: string) => (value ? `height: ${parseArbitraryValue(value)};` : ""),
  "min-w": (value?: string) => (value ? `min-width: ${parseArbitraryValue(value)};` : ""),
  "max-w": (value?: string) => (value ? `max-width: ${parseArbitraryValue(value)};` : ""),
  "min-h": (value?: string) => (value ? `min-height: ${parseArbitraryValue(value)};` : ""),
  "max-h": (value?: string) => (value ? `max-height: ${parseArbitraryValue(value)};` : ""),
};
