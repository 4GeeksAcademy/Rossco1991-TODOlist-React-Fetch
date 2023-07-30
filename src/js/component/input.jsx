import React, { useEffect } from "react";
import { useState } from "react";

export const Input = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [formValue, setFormValue] = useState({});
  
  useEffect(async () => {
    const url = "https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/rossco1991";
    const data = await fetch(url, { method: "GET" });
    const response = await data.json();
    setTodos(response);
  }, []);

  useEffect(async () => {
    const url = "https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/rossco1991";
    const data = await fetch(url, { 
      method: "PUT", 
      body:JSON.stringify(todos), 
      headers:{"Content-type":"application/json"}});
    

  }, [todos]);


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
            <div className="d-flex mt-2">
              <li className="list-group-item border-0" key={index}>
                {item}
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
      <p className="px-3">{todos.length} Left to do!</p>
    </div>
  );
};
