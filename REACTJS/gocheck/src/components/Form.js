import { useState } from "react";

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

export default Form;
