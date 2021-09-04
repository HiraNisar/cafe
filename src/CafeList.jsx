import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
const CafeList = () => {
  const fetchURL =
    "https://cafe-c25a8-default-rtdb.firebaseio.com/cafeBigstore.json";
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      setList(response.data);
    }
    fetchData();
  }, [fetchURL]);
  console.log(list);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <>
      <h1 align="center">Cafe Information</h1>
      <table>
        <thead>
          <th>Cafe Name</th>
          <th>City Name</th>
          <th>Drinks</th>
          <th>Pin Code</th>
        </thead>



        {Object.keys(list).map((key) => (
          <tbody>
            {/* <li key={key}>
              <label>Cafe Name:</label>
              {list[key].cafeName} <br />
              <label>City Name:</label>
              {list[key].cityName} <br />
              <label>Dinks:</label>
              {list[key].drinks} <br />
              <label>PinCode:</label>
              {list[key].pin}
              <br />
            </li> */}
           
            <tr key={key}>
                 <td>{list[key].cafeName}</td>
                 <td>{list[key].cityName}</td>
                 <td>{list[key].drinks}</td>
                 <td>{list[key].pin}</td>

            </tr>
          </tbody>
        ))}
      </table>
      <center>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Go Back
        </Button>
      </center>
    </>
  );
};

export default CafeList;
