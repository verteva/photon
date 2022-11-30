export const includes =
  <T>(listOfItems: Array<T>) =>
  (value: T): boolean => {
    const isValid = listOfItems.includes(value);
    if (!isValid) {
      console.warn(
        `${value} is not valid. Use one of the following: ${listOfItems}`
      );
    }

    return isValid;
  };
