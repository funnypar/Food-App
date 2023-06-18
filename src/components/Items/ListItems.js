import Card from "../UI/Card/Card";
import Item from "./Item";
import styles from "./ListItems.module.css";

const ListItems = (props) => {
    const userInputHandler = (userInput) => {
        props.onUserInputFromListItem(userInput);
    };
    return (
        <Card className={styles.container}>
            {props.datas.map((data) => {
                return (
                    <Item
                        data={data}
                        key={data.id}
                        onUserInputFromItem={userInputHandler}
                    />
                );
            })}
        </Card>
    );
};

export default ListItems;
