const formattedPrice = (price) => {
  const formattedPrice = price.toFixed(2);
  return `${formattedPrice} \u20B8`;
};

export { formattedPrice };