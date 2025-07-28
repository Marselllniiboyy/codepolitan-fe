import "./App.css";
import data from "./userdata.js";

const user = data[1];

const socialMedia = [
  { icon: "fa-brands fa-facebook", href: user.facebook },
  { icon: "fa-brands fa-instagram", href: user.instagram },
  { icon: "fa-brands fa-x-twitter", href: user.twitter },
  { icon: "fa-brands fa-linkedin", href: user.linkedin },
  { icon: "fa-brands fa-github", href: user.github },
];

function App() {
  return (
    <div className="card">
      <div
        className="top"
        style={{
          "--bg-url": `url(${user.bgProfile})`,
        }}
      >
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

function SocialButton({ icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button>
        <i className={icon}></i>
      </button>
    </a>
  );
}

function Headers() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const left = socialMedia.slice(0, middleIndex);
  const right = socialMedia.slice(middleIndex);
  console.log(left, right);

  return (
    <>
      <div className="social-buttons">
        {left.map((item, index) => (
          <SocialButton key={index} icon={item.icon} href={item.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {right.map((item, index) => (
          <SocialButton key={index} icon={item.icon} href={item.href} />
        ))}
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">{user.name}</div>
      </div>
      <div className="title">{user.job}</div>
    </div>
  );
}

function Biodata() {
  return (
    <>
      <p className="desc">
        My name is <b>{user.name}</b> and i am a Developer
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
  const userBadge = user.Badge;
  return (
    <div className="buttons">
      {userBadge.map((item, idx) => (
        <Badge key={idx} text={item} />
      ))}
    </div>
  );
}

export default App;
