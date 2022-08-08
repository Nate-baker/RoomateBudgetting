export default function Dashboard({ user }) {
  return (
    <div className="dashboard--page">
      <div className="dashboard--title">
        <h1>Dashboard</h1>
      </div>
      <div className="buttons">
        <button className="group--button">Group</button>
        <button className="personal--button">Personal</button>
        <button className="see--bills--button">See Bills</button>
      </div>
    </div>
  );
}
