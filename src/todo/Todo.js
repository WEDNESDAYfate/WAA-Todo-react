import React from "react";
import { useNavigate } from "react-router";

function Todo(props) {
  const navigate = useNavigate();

  const onClicked = (id) => {
    navigate("/todos/" + id);
  };

  return (
    <div
      onClick={() => {
        onClicked(props.id);
      }}
    >
      <p>{props.title}</p>
    </div>
  );
}

export default Todo;
