import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Todo } from "./todo";
import { Input } from "./input";

//create your first component
const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <Todo>
        <Input />
      </Todo>
    </div>
  );
};

export default Home;
