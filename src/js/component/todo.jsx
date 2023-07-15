import React from "react";
import { useState } from "react";
import { Children } from "react/cjs/react.production.min";


export const Todo = ({ children }) => {
 
  return (
    <div className="card w-75">
      <h1 className="title text-center text-danger">ToDo</h1>
      <div className="accordian">
          {children}
        </div>
    </div>
  );
};
