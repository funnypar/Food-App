import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import DesriptionPart from "./components/Description/DescriptionPart";
import ListItems from "./components/Items/ListItems";
import CartProvider from "./store/CartProvider";

const DATABASE = [
    {
        id: "1e",
        title: "Kabab",
        structure: "High quality meat and onions",
        price: 160000,
    },
    {
        id: "2e",
        title: "Joje",
        structure: "Chicken breast with special sauce",
        price: 130000,
    },
    {
        id: "3e",
        title: "Ghorme Sabzi",
        structure: "Fragrant vegetables with beans, red meat and spices",
        price: 190000,
    },
    {
        id: "4e",
        title: "Gheime",
        structure: "Red meat and cod with special stew",
        price: 150000,
    },
    {
        id: "5e",
        title: "Mirzaghasemi",
        structure: "Eggplant with garlic and local curd",
        price: 100000,
    },
];
function App() {
    const [cartStatus, setCartStatus] = useState(false);
    const showCartHandler = () => {
        setCartStatus(true);
    };
    const hideCartHandler = () => {
        setCartStatus(false);
    };
    return (
        <CartProvider>
            {cartStatus && <Cart onClose={hideCartHandler} />}
            <Header onCartShow={showCartHandler} />
            <DesriptionPart />
            <ListItems datas={DATABASE} />
        </CartProvider>
    );
}

export default App;
