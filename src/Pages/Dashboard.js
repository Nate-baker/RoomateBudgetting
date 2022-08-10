import Personal from "./Personal";
import Group from "./Group";
import AllBills from "./AllBills";

export default function Dashboard({ user, setPage }) {
  function changePage({ target: { id } }) {
    switch (id) {
      case "personal":
        setPage(<Personal uid={user.uid} />);
        break;
      case "group":
        setPage(<Group uid={user.uid} />);
        break;
      case "bills":
        setPage(<AllBills uid={user.uid} />);
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
