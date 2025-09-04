function Item({ item, deleteTaks, donedItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => donedItem(item.id)}
      ></input>
      <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
        {item.title}
      </span>
      <button onClick={() => deleteTaks(item.id)}>❌</button>
    </li>
  );
}

export default Item;
