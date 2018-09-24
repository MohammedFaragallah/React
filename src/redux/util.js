export const updateObject = (oldObject, ubdatedValues) => {
  return {
    ...oldObject,
    ...ubdatedValues,
  };
};
