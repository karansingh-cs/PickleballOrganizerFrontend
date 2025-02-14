
export default function Navbar(){
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tournaments">Tournaments</Link>
        </li>
      </ul>
    </nav>
  );
};
