import Context from "./Context";
import { useState } from "react";

const Orglist = (props) => {
  const host = "http://localhost:5000"
  const orgList = []
  const [org, setOrg] = useState(orgList)
  // Get all org
  const getOrg = async () => {
    // API Call 
    const response = await fetch(`${host}/data/org`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    setOrg(json)
  }

  return (
    <Context.Provider value={{ org, getOrg }}>
      {props.children}
    </Context.Provider>
  )

}
export default Orglist;