export const properCase = (value: string): string => {
    const firstLetter = value.charAt(0).toUpperCase();
    const restOfString = value.slice(1).toLowerCase();
    return firstLetter + restOfString.trim();
  };
