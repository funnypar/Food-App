import Button from "../UI/Button/Button";
import styles from "./Item.module.css";

const Item = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title__container}>
                <h5 className={styles.food__title}>{props.data.title}</h5>
                <h6 className={styles.food__structure}>
                    {props.data.structure}
                </h6>
                <p className={styles.food__price}>{props.data.price} T</p>
            </div>
            <form>
                <label>Amount</label>
                <input type="number" min="1" />
                <Button className={styles.btn} />
            </form>
        </div>
    );
};

export default Item;
