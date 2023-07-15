import React from "react";
import { useState } from "react";
import { Children } from "react/cjs/react.production.min";


export const Todo = ({ children }) => {
 
  return (
    <div className="card">
      <h4 className="title text-center">ToDo</h4>
      <div className="accordian">
          {children}
        </div>
    </div>
  );
};
