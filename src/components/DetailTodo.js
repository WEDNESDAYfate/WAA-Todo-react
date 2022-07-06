import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function TodoDetails() {
  const params = useParams();
  const [todoState, setTodoState] = useState({});

  const fetchToDo = async () => {
    const result = await axios.get("http://localhost:8080/todos/" + params.id);
    setTodoState(result.data);
  };

  useEffect(() => {
    fetchToDo();
  }, [params.id]);

  return (
    <div>
      {todoState.title},{todoState.description}
    </div>
  );
}

export default TodoDetails;
