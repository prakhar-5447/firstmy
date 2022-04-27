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

  const childList = []
  const [child, setChild] = useState(childList)
  const [cid, setcId] = useState("")
  // Get all child of org
  const getChild = async (childid) => {
    if (childid === "") {
      childid = "626182566938b94cc15391d8"
    }
    // API Call 
    const response = await fetch(`${host}/data/org/${childid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    setChild(json)
  }

  const setchildvalue = () => {
    setChild([])
  }

  const setorgid = (eid) => {
    setcId(eid)
  }

  return (
    <Context.Provider value={{ org, getOrg, cid, child, setchildvalue, getChild, setorgid }}>
      {props.children}
    </Context.Provider>
  )

}
export default Orglist;