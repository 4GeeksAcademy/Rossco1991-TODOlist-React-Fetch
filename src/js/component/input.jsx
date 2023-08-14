import React, { useEffect } from "react";
import { useState } from "react";

export const Input = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  
  useEffect(async () => {
    const url = "https://playground.4geeks.com/apis/fake/todos/user/rossco1991";
    const data = await fetch(url, { method: "GET" });
    const response = await data.json();
    setTodos(response);
  }, []);

  useEffect(async () => {
    const url = "https://playground.4geeks.com/apis/fake/todos/user/rossco1991";
    await fetch(url, { 
      method: "PUT", 
      body:JSON.stringify(todos), 
      headers:{"Content-type":"application/json"}});
  }, [todos]);


  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newTodo = [...todos, {label:input}];
    setTodos(newTodo);
    setInput("");
  };

  const removeTodo = (idx) => {
    setTodos(todos.toSpliced(idx, 1));
  };

  return (
    <div className="main px-2">
      <form className="index" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <ul className="list-group">
          {todos.map((item, index) => (
            item.hidden ? '':
            <div className="d-flex mt-2">
              <li className="list-group-item border-0" key={index}>
                {item.label}
              </li>
              <span
                key={index}
                className="border-rounded btn-danger ms-auto"
                onClick={() => removeTodo(index)}
              >
                <i className="fa-regular fa-circle-xmark fa-xl"></i>
              </span>
            </div>
          ))}
        </ul>
      </form>
      <p className="px-3">{todos.length-1} Left to do!</p>
    </div>
  );
};
