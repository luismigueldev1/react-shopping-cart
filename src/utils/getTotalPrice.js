export const getTotalPrice = (array) => {
  return array.reduce((acc, item) => {
    return (acc += item.totalPrice);
  }, 0);
};
