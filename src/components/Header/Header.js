import react from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = (props) => {
    return (
        <react.Fragment>
            <Nav userInput={props.userInput} />
            <img
                src={require("../../media/mehdi-pezhvak-nKjBbzQOI60-unsplash.webp")}
                alt="food"
                className={styles.image}
            />
        </react.Fragment>
    );
};

export default Header;
