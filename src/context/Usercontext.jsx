import React, { createContext, useEffect, useState } from "react";

export const Usercontext = createContext();

export const UsercontextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}
 
  useEffect(()=>{
    setData(currentUser)
  },[]) 
  // console.log("data from context page = ",data)  
  return (
    <Usercontext.Provider value={{ data,setData }}>
      {children}
    </Usercontext.Provider>
  );
};
