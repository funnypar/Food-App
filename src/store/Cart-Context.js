import react from "react";

const CartContext = react.createContext({
    items: [],
    amountOfItems: 0,
    addItemToCart: () => {},
    removeItemToCart: () => {},
});

export default CartContext;
