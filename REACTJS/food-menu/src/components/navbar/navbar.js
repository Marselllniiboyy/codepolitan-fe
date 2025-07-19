import "./style.css";

function Nav() {
  return (
    <>
      <div className="nav">
        <p>Logo</p>
        <div className="button-nav">
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </>
  );
}

export default Nav;
