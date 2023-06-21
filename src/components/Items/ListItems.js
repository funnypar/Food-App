import Card from "../UI/Card/Card";
import Item from "./Item";
import styles from "./ListItems.module.css";

const ListItems = (props) => {
    return (
        <Card className={styles.container}>
            {props.datas.map((data) => {
                return <Item data={data} key={data.id} />;
            })}
        </Card>
    );
};

export default ListItems;
