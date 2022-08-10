import React, { useEffect } from "react";
import { getBills } from "./Database";
export default function Bills({ uid }) {
  const [billsObj, setBillsObj] = React.useState();

  //UseEffect gets JSON of bills from DB using async/await
  useEffect(() => {
    async function getData() {
      try {
        setBillsObj(await getBills(uid));
      } catch (e) {}
    }
    getData();
  }, []);

  if (!billsObj) return <h1>NO BILLS</h1>;
  //Creates array of JSX Elements that represent each bill
  //****** COULD VERY WELL BE ANOTHER JSX ELEMENT *****//
  let arr = [];
  for (const x in billsObj) {
    let bill = billsObj[x];
    let newEle = (
      <div className="bill">
        <p className="name">{bill.name}</p>
        <p className="amount">{bill.amount}</p>
        <p className="date">{bill.date}</p>
      </div>
    );
    arr.push(newEle);
  }

  //return/display array of JSX elements
  return arr;
}
