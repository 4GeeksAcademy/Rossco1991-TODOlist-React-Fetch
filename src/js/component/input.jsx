import React, { useEffect } from "react";
import { useState } from "react";

export const Input = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState([]);

    useEffect( async () => {
            const url = "https://assets.breatheco.de/apis/fake/todos/user/rossco1991"
            const data = await fetch(url, {method: "GET"});
            const response = await data.json();
            setTasks(response);
    },[]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newTodo = [...todos, input];
    setTodos(newTodo);
    setInput("");
  };

  const removeTodo = (idx) => {
    setTodos(todos.toSpliced(idx, 1));
  };

  return (
    <>
      <form className="index" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <ul className="list-group">
          {todos.map((item, index) => (
              <li key={index}>{item}
              <span
                key={index}
                  className="btn btn-danger ms-auto"
                  onClick={() => removeTodo(index)}
                >
                  <i className="fa-regular fa-circle-xmark"></i>
                </span>
              </li>
          ))}
        </ul>
      </form>
      <p>{todos.length} Left to do!</p>
    </>
  );
};
