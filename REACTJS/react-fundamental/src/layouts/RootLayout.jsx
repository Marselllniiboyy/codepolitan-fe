import { Link, Outlet } from "react-router-dom";

// singgle page application
function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/About">About</Link> |
      <Link to="/Blog">Blog</Link> | <Link to="/Test">Test</Link>
      <p></p>
      <Outlet />
    </>
  );
}

export default RootLayout;
