import react from "react";

const CartContext = react.createContext({
    items: [],
    numberOfItems: 0,
    addItemToCart: () => {},
    removeItemToCart: () => {},
});

export default CartContext;
