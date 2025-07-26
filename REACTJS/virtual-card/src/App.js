import "./App.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Headers />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function SocialButton({ icon }) {
  return (
    <button>
      <i class={icon}></i>
    </button>
  );
}

function Headers() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-brands fa-facebook" />
        <SocialButton icon="fa-brands fa-instagram" />
        <SocialButton icon="fa-brands fa-x-twitter" />
      </div>
      <div className="social-buttons right">
        <SocialButton icon="fa-brands fa-linkedin" />
        <SocialButton icon="fa-brands fa-github" />
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Black Cat</div>
      </div>
      <div className="title">Meow Engineer</div>
    </div>
  );
}

function Biodata() {
  return (
    <>
      <p className="desc">
        My name is <b>Black Cat</b> and i am a Developer
      </p>
      <p className="desc">
        To say that i love software is an understatement, i spend every waking
        hour building something FUN & watching Tect Podcasts or attending
        meetups & Conferences.
      </p>
    </>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge text="🔬 Phd" />
      <Badge text="🧰 Engineer" />
      <Badge text="🎲 3D Model" />
    </div>
  );
}

export default App;
