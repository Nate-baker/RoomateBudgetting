import React from "react";
import { addBill } from "./Database";

export default function CreateBill({ setInfoBox, uid }) {
  const [billInfo, setBillInfo] = React.useState({});
  function handleChange(ele) {
    setBillInfo({
      ...billInfo,
      [ele.target.id]: ele.target.value
    });
  }
  function makeBill() {
    addBill(uid, billInfo);
    setInfoBox();
  }
  return (
    <div className="create-bill">
      <input id="name" onChange={handleChange} placeholder="Bill Name"></input>
      <input
        id="amount"
        onChange={handleChange}
        placeholder="Bill Amount"
      ></input>
      <input
        id="date"
        onChange={handleChange}
        placeholder="Bill Date eg. (1st) (Jan 4th)"
      ></input>
      <button onClick={makeBill}>Add Bill</button>
      <button onClick={setInfoBox}>Close</button>
    </div>
  );
}
