import CartContext from "./Cart-Context";

const CartProvider = (props) => {
    const addItemToCartHandler = () => {};
    const removeItemToCartHandler = () => {};

    const CartValue = {
        items: [],
        numberOfItems: 0,
        addItemToCart: addItemToCartHandler,
        removeItemToCart: removeItemToCartHandler,
    };
    return (
        <CartContext.Provider value={CartValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
