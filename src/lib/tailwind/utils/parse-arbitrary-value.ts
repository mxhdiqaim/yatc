export const parseArbitraryValue = (value: string): string => {
  // Remove brackets
  value = value.replace(/^\[|\]$/g, "");

  // Handle CSS variables
  if (value.includes("var(")) {
    return value;
  }

  // // Handle complex values like family-name
  // if (value.includes(":")) {
  //   console.log("separated", value.split(":"));
  //   const [property, val] = value.split(":");
  //   return `${property}: ${val}`;
  // }

  return value;
};
