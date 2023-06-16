import styles from "./Item.module.css";

const Item = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title__container}>
                <h5 className={styles.food__title}>Kabab</h5>
                <h6 className={styles.food__structure}>
                    High quality meat and onions
                </h6>
                <p className={styles.food__price}>160,000 T</p>
            </div>
            <form>
                <label>Amount</label>
                <input type="number" />
                <button type="submit">+ Add</button>
            </form>
        </div>
    );
};

export default Item;
