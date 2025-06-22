function isEnoughCapacity(products, containerSize) {
  let total = 0;

  for (const value of Object.values(products)) {
    total += value;
  }

  return total <= containerSize;
}