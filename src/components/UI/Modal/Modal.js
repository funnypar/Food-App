import react from "react";
import reactDom from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose} />;
};
const Modaloverlay = (props) => {
    return <div className={styles.modal}>{props.children}</div>;
};

const id = document.querySelector("#overlay");

const Modal = (props) => {
    return (
        <react.Fragment>
            {reactDom.createPortal(<Backdrop onClose={props.onClose} />, id)}
            {reactDom.createPortal(
                <Modaloverlay>{props.children}</Modaloverlay>,
                id
            )}
        </react.Fragment>
    );
};

export default Modal;
