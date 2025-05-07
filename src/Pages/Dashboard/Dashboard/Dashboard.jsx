import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa6";

const Dashboard = () => {
  const [contactMsg, setContactMsg] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/contactMsg").then((res) => {
      console.log("contactMsg GET response=>", res.data);
      setContactMsg(res.data);
    });
  }, []);

  return (
    <div className="text-white mt-28 flex flex-col justify-center ">
      <h2 className="text-xl  text-center border-2 my-2 rounded-3xl">Dashboard</h2>
      <h2 className="text-xl  text-center my-2">Total Contact Messages: {contactMsg.length}</h2>

      {/* table  */}
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
        <table className="table bg-slate-400 w-full">
          {/* head */}
          <thead>
            <tr className="text-md uppercase text-center bg-[#D1A054] text-white">
              <th className="border-tl-2 rounded-tl-md">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {contactMsg.map((oneMsg, idx) => {
              console.log("Rendering message:", idx, oneMsg);
              return(
              <tr key={idx} className="*:text-black">
                <th>{idx + 1}</th>
                <td>{oneMsg?.name || "N/A"}</td>
                <td>{oneMsg?.email || "N/A"}</td>
                <td className="break-words max-w-xs">
                  {oneMsg?.msg|| "N/A"}
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
