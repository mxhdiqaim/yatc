export const borderMapping: Record<string, string> = {
  // Border
  rounded: "border-radius: 0.25rem;",
  "rounded-sm": "border-radius: 0.125rem;",
  "rounded-md": "border-radius: 0.375rem;",
  "rounded-lg": "border-radius: 0.5rem;",
  "rounded-full": "border-radius: 9999px;",
  "rounded-t-none": "border-top-left-radius: 0; border-top-right-radius: 0;",
  "rounded-r-none": "border-top-right-radius: 0; border-bottom-right-radius: 0;",
  "rounded-b-none": "border-bottom-right-radius: 0; border-bottom-left-radius: 0;",
  "rounded-l-none": "border-top-left-radius: 0; border-bottom-left-radius: 0;",
  "rounded-t-sm": "border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;",
  "rounded-r-sm": "border-top-right-radius: 0.125rem; border-bottom-right-radius: 0.125rem;",
  "rounded-b-sm": "border-bottom-right-radius: 0.125rem; border-bottom-left-radius: 0.125rem;",
  "rounded-l-sm": "border-top-left-radius: 0.125rem; border-bottom-left-radius: 0.125rem;",
  "rounded-t-md": "border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem;",
  "rounded-r-md": "border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;",
  "rounded-b-md": "border-bottom-right-radius: 0.375rem; border-bottom-left-radius: 0.375rem;",
  "rounded-l-md": "border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;",
  "rounded-t-lg": "border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;",
  "rounded-r-lg": "border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;",
  "rounded-b-lg": "border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem;",
  "rounded-l-lg": "border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;",
  "rounded-t-full": "border-top-left-radius: 9999px; border-top-right-radius: 9999px;",
  "rounded-r-full": "border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;",
  "rounded-b-full": "border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;",
  "rounded-l-full": "border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;",
  "rounded-tl-none": "border-top-left-radius: 0;",
  "rounded-tr-none": "border-top-right-radius: 0;",
  "rounded-br-none": "border-bottom-right-radius: 0;",
  "rounded-bl-none": "border-bottom-left-radius: 0;",
  "rounded-tl-sm": "border-top-left-radius: 0.125rem;",
  "rounded-tr-sm": "border-top-right-radius: 0.125rem;",
  "rounded-br-sm": "border-bottom-right-radius: 0.125rem;",
  "rounded-bl-sm": "border-bottom-left-radius: 0.125rem;",
  "rounded-tl-md": "border-top-left-radius: 0.375rem;",
  "rounded-tr-md": "border-top-right-radius: 0.375rem;",
  "rounded-br-md": "border-bottom-right-radius: 0.375rem;",
  "rounded-bl-md": "border-bottom-left-radius: 0.375rem;",
  "rounded-tl-lg": "border-top-left-radius: 0.5rem;",
  "rounded-tr-lg": "border-top-right-radius: 0.5rem;",
  "rounded-br-lg": "border-bottom-right-radius: 0.5rem;",
  "rounded-bl-lg": "border-bottom-left-radius: 0.5rem;",
  "rounded-tl-full": "border-top-left-radius: 9999px;",
  "rounded-tr-full": "border-top-right-radius: 9999px;",
  "rounded-br-full": "border-bottom-right-radius: 9999px;",
  "rounded-bl-full": "border-bottom-left-radius: 9999px;",
  "rounded-tl-0": "border-top-left-radius: 0;",
  "rounded-tr-0": "border-top-right-radius: 0;",
  "rounded-br-0": "border-bottom-right-radius: 0;",
  "rounded-bl-0": "border-bottom-left-radius: 0;",
  "rounded-tl-2xl": "border-top-left-radius: 0.75rem;",
  "rounded-tr-2xl": "border-top-right-radius: 0.75rem;",
  "rounded-br-2xl": "border-bottom-right-radius: 0.75rem;",
  "rounded-bl-2xl": "border-bottom-left-radius: 0.75rem;",
  "rounded-tl-4xl": "border-top-left-radius: 1rem;",
  "rounded-tr-4xl": "border-top-right-radius: 1rem;",
  "rounded-br-4xl": "border-bottom-right-radius: 1rem;",
  "rounded-bl-4xl": "border-bottom-left-radius: 1rem;",
  "rounded-tl-8xl": "border-top-left-radius: 2rem;",
  "rounded-tr-8xl": "border-top-right-radius: 2rem;",
  "rounded-br-8xl": "border-bottom-right-radius: 2rem;",
  "rounded-bl-8xl": "border-bottom-left-radius: 2rem;",
  border: "border-width: 1px;",
  "border-0": "border-width: 0;",
  "border-2": "border-width: 2px;",
  "border-4": "border-width: 4px;",
  "border-8": "border-width: 8px;",
  "border-t": "border-top-width: 1px;",
  "border-r": "border-right-width: 1px;",
  "border-b": "border-bottom-width: 1px;",
  "border-l": "border-left-width: 1px;",
  "border-t-0": "border-top-width: 0;",
  "border-r-0": "border-right-width: 0;",
  "border-b-0": "border-bottom-width: 0;",
  "border-l-0": "border-left-width: 0;",
  "border-t-2": "border-top-width: 2px;",
  "border-r-2": "border-right-width: 2px;",
  "border-b-2": "border-bottom-width: 2px;",
  "border-l-2": "border-left-width: 2px;",
  "border-t-4": "border-top-width: 4px;",
  "border-r-4": "border-right-width: 4px;",
  "border-b-4": "border-bottom-width: 4px;",
  "border-l-4": "border-left-width: 4px;",
  "border-t-8": "border-top-width: 8px;",
  "border-r-8": "border-right-width: 8px;",
  "border-b-8": "border-bottom-width: 8px;",
  "border-l-8": "border-left-width: 8px;",
  "border-solid": "border-style: solid;",
  "border-dashed": "border-style: dashed;",
  "border-dotted": "border-style: dotted;",
  "border-double": "border-style: double;",
  "border-none": "border-style: none;",
  "border-collapse": "border-collapse: collapse;",
  "border-separate": "border-collapse: separate;",
  "border-transparent": "border-color: transparent;",

  "border-opacity-0": "border-opacity: 0;",
  "border-opacity-5": "border-opacity: 0.05;",
  "border-opacity-10": "border-opacity: 0.1;",
  "border-opacity-20": "border-opacity: 0.2;",
  "border-opacity-25": "border-opacity: 0.25;",
  "border-opacity-30": "border-opacity: 0.3;",
  "border-opacity-40": "border-opacity: 0.4;",
  "border-opacity-50": "border-opacity: 0.5;",
  "border-opacity-60": "border-opacity: 0.6;",
  "border-opacity-70": "border-opacity: 0.7;",
  "border-opacity-75": "border-opacity: 0.75;",
  "border-opacity-80": "border-opacity: 0.8;",
  "border-opacity-90": "border-opacity: 0.9;",
  "border-opacity-95": "border-opacity: 0.95;",
  "border-opacity-100": "border-opacity: 1;",

  "divide-x-0": "border-right-width: 0;",
  "divide-y-0": "border-bottom-width: 0;",
  "divide-x-2": "border-right-width: 0.125rem;",
  "divide-y-2": "border-bottom-width: 0.125rem;",
  "divide-x-4": "border-right-width: 0.25rem;",
  "divide-y-4": "border-bottom-width: 0.25rem;",
  "divide-x-8": "border-right-width: 0.5rem;",
  "divide-y-8": "border-bottom-width: 0.5rem;",
  "divide-x": "border-right-width: 1px;",
  "divide-y": "border-bottom-width: 1px;",
  "divide-x-reverse": "border-right-width: 1px; border-right-color: currentColor;",
  "divide-y-reverse": "border-bottom-width: 1px; border-bottom-color: currentColor;",
  "divide-transparent": "border-color: transparent;",
  "divide-current": "border-color: currentColor;",

  "divide-opacity-0": "border-opacity: 0;",
  "divide-opacity-5": "border-opacity: 0.05;",
  "divide-opacity-10": "border-opacity: 0.1;",
  "divide-opacity-20": "border-opacity: 0.2;",
  "divide-opacity-25": "border-opacity: 0.25;",
  "divide-opacity-30": "border-opacity: 0.3;",
  "divide-opacity-40": "border-opacity: 0.4;",
  "divide-opacity-50": "border-opacity: 0.5;",
  "divide-opacity-60": "border-opacity: 0.6;",
  "divide-opacity-70": "border-opacity: 0.7;",
  "divide-opacity-75": "border-opacity: 0.75;",
  "divide-opacity-80": "border-opacity: 0.8;",
  "divide-opacity-90": "border-opacity: 0.9;",
  "divide-opacity-95": "border-opacity: 0.95;",
  "divide-opacity-100": "border-opacity: 1;",
  "divide-solid": "border-style: solid;",
  "divide-dashed": "border-style: dashed;",
  "divide-dotted": "border-style: dotted;",
  "divide-double": "border-style: double;",
  "divide-none": "border-style: none;",
  "divide-collapse": "border-collapse: collapse;",
  "divide-separate": "border-collapse: separate;",
} as const;
