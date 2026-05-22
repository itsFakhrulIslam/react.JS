// ^get items from the local storage
const getToLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);

    return storedCart;
  }

  return [];
};

// ^set items to the local storage
const setToLocalStorage = (id) => {
  const getCart = getToLocalStorage();

  // first way to add
  //   const newCart = [...getCart, id];

  // another way to add
  getCart.push(id);

  // save newCart/getCart to the local storage
  saveCartLocalStorage(getCart);
};

// save cart to local storage
const saveCartLocalStorage = (cart) => {
  const cartStringify = JSON.stringify(cart);

  localStorage.setItem("cart", cartStringify);
};

const removeCartLocalStorage = (id) => {
  const storedCart = getToLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);

  saveCartLocalStorage(remainingCart);
};

export { getToLocalStorage, setToLocalStorage, removeCartLocalStorage };
