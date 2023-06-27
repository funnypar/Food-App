import { useRef, useContext, useState } from "react";
import CartContext from "../../store/Cart-Context";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import styles from "./Item.module.css";

const Item = (props) => {
    const [errorState, setErrorState] = useState(true);
    const ctx = useContext(CartContext);
    const userNumber = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        if (+userNumber.current.value > 5) {
            setErrorState(false);
            return;
        }
        ctx.addItemToCart({
            id: props.data.id,
            title: props.data.title,
            price: props.data.price,
            amount: +userNumber.current.value,
        });
    };
    const closeErrorHandler = () => {
        setErrorState(true);
    };
    return (
        <div className={styles.container}>
            <div className={styles.title__container}>
                <h5 className={styles.food__title}>{props.data.title}</h5>
                <h6 className={styles.food__structure}>
                    {props.data.structure}
                </h6>
                <p className={styles.food__price}>{props.data.price} T</p>
            </div>
            <form onSubmit={submitHandler}>
                <label>Amount</label>
                <input type="number" min="1" ref={userNumber} />
                <Button className={styles.btn} />
                {!errorState && (
                    <Modal onClose={closeErrorHandler}>
                        <h2>Please enter a valid number 1 to 5</h2>
                    </Modal>
                )}
            </form>
        </div>
    );
};

export default Item;
