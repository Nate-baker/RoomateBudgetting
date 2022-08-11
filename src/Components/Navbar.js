import Personal from "../Pages/Personal";
import Group from "../Pages/Group";
import AllBills from "../Pages/AllBills";
import Dashboard from "../Pages/Dashboard";

export default function Navbar({ display, setPage, uid }) {
  const style = { display: display ? "block" : "none" };
  function changePage({ target: { innerHTML } }) {
    switch (innerHTML) {
      case "Dashboard":
        setPage(<Dashboard uid={uid} setPage={setPage} />);
        break;
      case "Personal":
        setPage(<Personal uid={uid} />);
        break;
      case "Group":
        setPage(<Group uid={uid} />);
        break;
      case "All Bills":
        setPage(<AllBills uid={uid} />);
        break;
      default:
        console.log("how'd you get here??");
    }
  }
  return (
    <div>
      <nav className="navbar" style={style}>
        <ul>
          <li>
            <button onClick={changePage}>Dashboard</button>
          </li>
          <li>
            <button onClick={changePage}>Group</button>
          </li>
          <li>
            <button onClick={changePage}>Personal</button>
          </li>
          <li>
            <button onClick={changePage}>All Bills</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
