const temp = [
  { id: 1, todo: "Gym", done: false },
  { id: 2, todo: "Reading", done: true },
];

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <FormInput />
        <Taks />
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

function FormInput() {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Enter a task" />
        <button>Submit</button>
      </form>
    </div>
  );
}

function Taks() {
  return (
    <div className="task">
      <ul>
        {temp.map((item) => (
          <div>
            <input type="checkbox" />
            <li key={item.id}>{item.todo}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
