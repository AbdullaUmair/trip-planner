import { useState } from "react";
import "./App.css";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((prevState) => prevState.filter((item) => item.id !== id));

        // setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }
    function handleClearall() {
        const confirm = window.confirm("Are you sure to delete all items?");

        if (confirm) setItems([]);
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItems={handleDeleteItem}
                onToggleItems={handleToggleItem}
                onClearAll={handleClearall}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
