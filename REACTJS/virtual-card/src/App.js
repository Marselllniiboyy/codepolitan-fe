import "./App.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <div className="social-buttons">
          <button>
            <i>🧰</i>
          </button>
          <button>🧰</button>
          <button>🧰</button>
        </div>
        <div className="social-buttons right ">
          <button>🧰</button>
          <button>🧰</button>
        </div>
        <div className="text">
          <div className="name-wrapper">
            <h1 className="name">Black Cat</h1>
            <p className="title">Meow Engineer</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p className="desc">
          My name is <b>Black Cat</b> and i am a Developer
        </p>
        <p className="desc">
          To say that i love software is an understatement, i spend every waking
          hour building something FUN & watching Tect Podcasts or attending
          meetups & Conferences.
        </p>
        <div className="buttons">
          <button className="">🔬 PhD</button>
          <button>🧰 Mounteineer</button>
          <button>🎲 3D Geek</button>
        </div>
      </div>
    </div>
  );
}

export default App;
