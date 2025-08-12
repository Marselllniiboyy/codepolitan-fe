import { useState } from "react";

function App() {
  const [listItem, setListItem] = useState([
    { id: 1, title: "Eat", done: false },
    { id: 2, title: "Gym", done: false },
  ]);

  function addTask(newTask) {
    setListItem((prev) => [
      ...prev,
      { id: prev.length + 1, title: newTask, done: false },
    ]);
  }

  function deleteTaks(id) {
    setListItem((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddTaks={addTask} />
      <CheckList lisItem={listItem} deleteTaks={deleteTaks} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <div className="logo">📝 GoCheck ✅</div>;
}

function Form({ onAddTaks }) {
  const [newTask, setNewTask] = useState("");

  function handleSub(e) {
    e.preventDefault();
    if (!newTask.trim()) return;
    onAddTaks(newTask);

    setNewTask("");
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSub}>
        <h3>Noted</h3>
        <input
          type="text"
          name="title"
          id=""
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        ></input>
        <button>Add</button>
      </form>
    </>
  );
}

function CheckList({ lisItem, deleteTaks }) {
  return (
    <div className="list">
      <ul>
        {lisItem.map((item) => (
          <Item key={item.id} item={item} deleteTaks={deleteTaks} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, deleteTaks }) {
  const [done, setDone] = useState(false);

  return (
    <li key={item.id}>
      <input
        type="checkbox"
        onChange={(e) => setDone(e.target.checked)}
      ></input>
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {item.title}
      </span>
      <button onClick={() => deleteTaks(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>📝 Kamu punya 5 catatan dan baru 6 yang di checklist (%)</span>
    </footer>
  );
}

export default App;
