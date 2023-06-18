import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
    const cardItems = (
        <ul className={styles["cart-items"]}>
            {[
                {
                    id: "1e",
                    title: "Kabab",
                    structure: "High quality meat and onions",
                    price: "160,000",
                },
            ].map((item) => {
                return <li>{item.title}</li>;
            })}
        </ul>
    );
    return (
        <Modal>
            {cardItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>450,000 T</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
