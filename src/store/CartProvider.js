import { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultReducerState = {
    items: [],
    totalAmount: 0,
};
const cartReducer = (state, action) => {
    if (action.type === "Add") {
        const updatedState = state.items.concat(action.item);
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.amount;

        return {
            items: updatedState,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "Remove") {
    }
    return defaultReducerState;
};

const CartProvider = (props) => {
    const [cartState, dispatschCart] = useReducer(
        cartReducer,
        defaultReducerState
    );
    const addItemToCartHandler = (item) => {
        dispatschCart({ type: "Add", item: item });
    };
    const removeItemToCartHandler = (id) => {
        dispatschCart({ type: "Remove", id: id });
    };

    const CartValue = {
        items: cartState.items,
        amountOfItems: cartState.totalAmount,
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
