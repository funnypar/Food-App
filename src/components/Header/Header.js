import react from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <react.Fragment>
            <Nav />
            <img
                src={require("../../media/mehdi-pezhvak-nKjBbzQOI60-unsplash.jpg")}
                alt="food"
                className={styles.image}
            />
        </react.Fragment>
    );
};

export default Header;
