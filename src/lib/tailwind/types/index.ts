export interface ConvertTailwindToCSSOutput {
  css: string;
  unknownClasses: string[];
}

export interface ColorShade {
  [key: string]: string;
}

export interface ColorMap {
  [key: string]: ColorShade;
}

export interface TailwindMapping {
  [key: string]: string | ((value?: string) => string);
}

// not currently used
export interface OptionsI {
  prefix?: string;
  format: "css";
}
