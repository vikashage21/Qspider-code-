import React, { useContext } from 'react';
import { myContext } from './ContextB.jsx';

function Child2() {
  let val = useContext(myContext);

  return (
    <div>
      <p>ID: {val.id}</p>
      <p>Name: {val.Mname}</p>
      <p>Salary: {val.salary}</p>
    </div>
  );
}

export default Child2;
