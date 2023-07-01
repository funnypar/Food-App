import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
    const ctxCart = useContext(CartContext);
    const cardItems = (
        <ul className={styles["cart-items"]}>
            {ctxCart.items.map((item) => {
                return (
                    <div className={styles.item} key={item.id}>
                        <div className={styles["item-leftSide"]}>
                            <li>{item.title}</li>
                            <div className={styles["item-leftSide-down"]}>
                                <p className={styles["item-price"]}>
                                    {item.price} T
                                </p>
                                <p className={styles["item-amount"]}>
                                    x{item.amount}
                                </p>
                            </div>
                        </div>
                        <div className={styles["btn-container"]}>
                            <button className={styles["item-btn"]}>+</button>
                            <button className={styles["item-btn"]}>-</button>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cardItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{ctxCart.amountOfItems}</span>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles["button--alt"]}
                    onClick={props.onClose}
                >
                    Close
                </button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
