import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";

function App() {
  const [listItem, setListItem] = useState([]);

  function addTask(newTask) {
    setListItem((prev) =>
      [...prev, { id: prev.length + 1, title: newTask, done: false }].sort(
        (a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1)
      )
    );
  }

  function deleteTaks(id) {
    setListItem((prev) => prev.filter((item) => item.id !== id));
    console.log(listItem);
  }

  function donedItem(id) {
    setListItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function deleteAll() {
    const hendleconfirm = window.confirm("Yakin Dihapuss??");
    if (hendleconfirm) {
      setListItem([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddTaks={addTask} />
      <CheckList
        lisItem={listItem}
        deleteTaks={deleteTaks}
        donedItem={donedItem}
        deleteAll={deleteAll}
      />
      <Stats lisItem={listItem} />
    </div>
  );
}

export default App;
