export function Item({ item, onDeleteItems, onToggleItems }) {
    return (
        <div>
            <li>
                <input
                    type="checkbox"
                    value={item.packed}
                    onChange={() => onToggleItems(item.id)}
                />
                <span
                    style={
                        item.packed ? { textDecoration: "line-through" } : {}
                    }
                >
                    {item.quantity}
                    {item.description}
                </span>
                <buttons onClick={() => onDeleteItems(item.id)}>❌</buttons>
            </li>
        </div>
    );
}
