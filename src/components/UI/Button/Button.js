import styles from "./Button.module.css";

const Button = (props) => {
    const classes = `${styles.btn} ${props.className}`;
    return (
        <button type="submit" className={classes}>
            + Add
        </button>
    );
};

export default Button;
