import { useState, useEffect } from "react";

const Info = () => {
  const [data, setData] = useState([{id:1,name: 'ali'},{id:2,name: 'noor'},{id:3,name: 'salim'}]);

  const removeItem = (id) => {
    setData(data.filter((el) => el.id !== id));
  };

  function addNew(){
      setData([...data, {id:4,name: 'murtadha'}])
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Info Page</h1>
        <button onClick={addNew}>Add new</button>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
