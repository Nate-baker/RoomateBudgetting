import React, { useEffect } from "react";
import { getUser } from "../Components/Database";
import CreateBill from "../Components/CreateBill";
import Bills from "../Components/Bills";

export default function Personal({ uid }) {
  const [userInfo, setUserInfo] = React.useState();
  const [infoBox, setInfoBox] = React.useState(<Bills uid={uid} />);

  useEffect(() => {
    async function getUserData() {
      setUserInfo(await getUser(uid));
    }
    getUserData();
  }, []);

  function createNewBill() {
    setInfoBox(<CreateBill setInfoBox={setBillsBox} uid={uid} />);
  }

  function setBillsBox() {
    setInfoBox(<Bills uid={uid} />);
  }

  return (
    <div className="personal--bills--page">
      <div className="personal--bills--header">
        <h1 className="personal--bills--title">Personal Bills</h1>
        <button className="new--bill--button" onClick={createNewBill}>
          New bill
        </button>
      </div>
      <div className="bills--data">{infoBox}</div>
    </div>
  );
}
