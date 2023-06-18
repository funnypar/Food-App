import NavBuy from "./NavBuy";
import styles from "./Nav.module.css";

const Nav = (props) => {
    return (
        <nav>
            <h1 className={styles.header}>IranianMeals</h1>
            <NavBuy userInput={props.userInput} />
        </nav>
    );
};
export default Nav;
