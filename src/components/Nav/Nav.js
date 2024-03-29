import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import styles from "./Nav.module.css";

const Nav = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);
    return (
        <nav>
            <h1 className={styles.header}>IranianMeals</h1>
            <div className={styles.container}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="20px"
                    height="20px"
                    className={styles.icon}
                    onClick={props.onCartShow}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>
                <h2>Your Cart</h2>
                <h3 className={styles.number}>{numberOfItems}</h3>
            </div>
        </nav>
    );
};
export default Nav;
