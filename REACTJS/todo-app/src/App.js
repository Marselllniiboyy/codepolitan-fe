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
        <Footer />
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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
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
          <div className="mini-task">
            <div className="checkbox">
              <input type="checkbox" />
              <li key={item.id}>{item.todo}</li>
            </div>
            <button>❌</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="result">
      <h2>Taks is 10 , taks Done is 0</h2>
    </div>
  );
}
export default App;
