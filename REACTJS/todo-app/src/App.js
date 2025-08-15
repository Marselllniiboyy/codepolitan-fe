import { useState } from "react";

function App() {
  const [items, seItems] = useState([]);
  return (
    <>
      <div className="app">
        <Header />
        <FormInput setItems={seItems} items={items} />
        <Taks items={items} setItems={seItems} />
        <Footer items={items} />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <h1>Todo App</h1>
    </>
  );
}

function FormInput({ setItems, items }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      setItems([{ id: items.length + 1, todo: input, done: false }, ...items]);
    }
    setInput("");
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

function Taks({ items, setItems }) {
  function handleDoneTask(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    setItems((prev) => {
      const notDone = prev.filter((item) => !item.done);
      const done = prev.filter((item) => item.done);
      return [...notDone, ...done];
    });
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="task">
      <ul>
        {items.map((item) => (
          <div className="mini-task" key={item.id}>
            <div className="checkbox">
              <input
                type="checkbox"
                onClick={() => {
                  handleDoneTask(item.id);
                }}
              />
              <li
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.todo}
              </li>
            </div>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

function Footer({ items }) {
  const doneTask = items.filter((item) => item.done).length;
  return (
    <div className="result">
      <h2>
        Taks is {items.length} , taks Done is {doneTask}
      </h2>
    </div>
  );
}

export default App;
