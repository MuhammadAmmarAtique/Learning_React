import React, {useState} from "react";
import BarChart from "./components/BarChart";
import { Userdata } from "./Data";

const App = () => {
  const [userData, setuserData] = useState({
    labels: Userdata.map((user) => user.year),
    datasets: [
      {
        label: "user Gained",
        data: Userdata.map((user) => user.userGain),
      },
    ],
  });

  return (
    <div style={{width: "500px", marginLeft: "500px"}}>
      <BarChart BarData={userData} />
    </div>
  );
};

export default App;
