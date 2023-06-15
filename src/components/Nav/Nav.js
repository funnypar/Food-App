import NavBuy from "./NavBuy";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <h1 className={styles.header}>IranianMeals</h1>
            <NavBuy />
        </nav>
    );
};
export default Nav;
