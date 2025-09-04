import { useState } from "react";
import Item from "./Item";

function CheckList({ lisItem, deleteTaks, donedItem, deleteAll }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    console.log(sortBy);
    switch (sortBy) {
      case "judul":
        return lisItem.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return lisItem.slice().sort((a, b) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return lisItem;
    }
  }
  const sortedItems = sortItems();
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteTaks={deleteTaks}
            donedItem={donedItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value={"input"}>Urutkan berdasarkan Input</option>
          <option value={"judul"}>Urutkan berdasarkan judul</option>
          <option value={"status"}>Urutkan berdasarkan status</option>
        </select>
        <button onClick={() => deleteAll()}>Hapus</button>
      </div>
    </div>
  );
}

export default CheckList;
