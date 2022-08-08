import Personal from "./Personal";
import Group from "./Group";
import Bills from "./Bills";

export default function Dashboard({ user, setPage }) {
  function changePage({ target: { id } }) {
    switch (id) {
      case "personal":
        setPage(<Personal user={user} />);
        break;
      case "group":
        setPage(<Group user={user} />);
        break;
      case "bills":
        setPage(<Bills user={user} />);
        break;
      default:
        console.log("how'd you get here??");
    }
  }

  return (
    <div className="dashboard--page">
      <div className="dashboard--title">
        <h1>Dashboard</h1>
      </div>
      <div className="buttons">
        <button id="group" className="group--button" onClick={changePage}>
          Group
        </button>
        <button id="personal" className="personal--button" onClick={changePage}>
          Personal
        </button>
        <button id="bills" className="see--bills--button" onClick={changePage}>
          See Bills
        </button>
      </div>
    </div>
  );
}
