import styles from "./DescriptionPart.module.css";
import Card from "../UI/Card";

const DesriptionPart = () => {
    return (
        <Card className={styles.container}>
            <h2>Delicious Iranian 🍲 , Delivered To You 😋</h2>
            <p className={styles.description__text}>
                Choose your favorite meal from our menu and enjoy a delicious
                lunch or dinner at home 😌 All our meals are cooked with
                high-quality ingredients, just-in-time and of course by
                experienced iranian chefs 🔪
            </p>
        </Card>
    );
};

export default DesriptionPart;
