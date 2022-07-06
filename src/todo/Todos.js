import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";

function Todos() {
  const [todoState, setTodoState] = useState([]);

  //get the data from the backend
  const fetchTodos = async () => {
    const result = await axios.get("http://localhost:8080/todos/getAll");
    setTodoState(result.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todoState.map((item) => (
        <Todo title={item.title} id={item.id} key={item.id} />
      ))}
    </div>
  );
}

export default Todos;
