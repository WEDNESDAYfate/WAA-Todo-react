import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "../todo/Todos";
import TodoDetails from "./DetailTodo";

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/todo" element={<Todos></Todos>} />

        <Route path="/todos/:id" element={<TodoDetails></TodoDetails>} />
      </Routes>
    </div>
  );
}

export default MyRoutes;
