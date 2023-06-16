import react from "react";
import Header from "./components/Header/Header";
import DesriptionPart from "./components/Description/DescriptionPart";
import ListItems from "./components/Items/ListItems";

function App() {
    return (
        <react.Fragment>
            <Header />
            <DesriptionPart />
            <ListItems />
        </react.Fragment>
    );
}

export default App;
