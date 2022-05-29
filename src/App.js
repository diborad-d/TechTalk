import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Hello Form App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="Dashboard">Dashboard</Link> | {""}
        <Link to="Users">Users</Link>
      </nav>
    </div>
  );
}

export default App;
