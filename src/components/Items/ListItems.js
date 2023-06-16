import Card from "../UI/Card";
import Item from "./Item";
import styles from "./ListItems.module.css";

const ListItems = () => {
    return (
        <Card className={styles.container}>
            <Item />
        </Card>
    );
};

export default ListItems;
