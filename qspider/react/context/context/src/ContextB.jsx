import React, { createContext } from 'react';

export const myContext = createContext("");

function ContextB(props) {
  let user = {
    id: 1,
    Mname: "jhone",
    salary: 1000
  };

  return (
    <myContext.Provider value={user}>
      {props.children}
    </myContext.Provider>
  );
}

export default ContextB;
