//import React com userState
import React, { useState } from "react";
//import css
import "./tasklist.css";

//import lib prop-types
import PropTypes from "prop-types";

export default function TaskList({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {count}
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
}

//Definindo types e restrições com PropTypes
TaskList.propTypes = {
  title: PropTypes.string.isRequired
};
