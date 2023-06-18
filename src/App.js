import react, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import DesriptionPart from "./components/Description/DescriptionPart";
import ListItems from "./components/Items/ListItems";

const DATABASE = [
    {
        id: "1e",
        title: "Kabab",
        structure: "High quality meat and onions",
        price: "160,000",
    },
    {
        id: "2e",
        title: "Joje",
        structure: "Chicken breast with special sauce",
        price: "130,000",
    },
    {
        id: "3e",
        title: "Ghorme Sabzi",
        structure: "Fragrant vegetables with beans, red meat and spices",
        price: "190,000",
    },
    {
        id: "4e",
        title: "Gheime",
        structure: "Red meat and cod with special stew",
        price: "150,000",
    },
    {
        id: "5e",
        title: "Mirzaghasemi",
        structure: "Eggplant with garlic and local curd",
        price: "100,00",
    },
];
function App() {
    const [userInput, setUserInput] = useState("");
    const userInputFromListItemHandler = (userInput) => {
        setUserInput(userInput);
    };

    return (
        <react.Fragment>
            <Cart />
            <Header userInput={userInput} />
            <DesriptionPart />
            <ListItems
                datas={DATABASE}
                onUserInputFromListItem={userInputFromListItemHandler}
            />
        </react.Fragment>
    );
}

export default App;
