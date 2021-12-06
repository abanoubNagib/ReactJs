import { useState  } from "react";
import Watch from "./Watch";
import "./todo.css"

export default function Todo() {
  const [Todo, setTodo] = useState({
    name: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [Todolist, updateTodo] = useState({
    name: [],
  });

  const handleInputChange = (e) => {
    console.log(e.target.value, e.target.name);
    setTodo({
      ...Todo,
      name: e.target.value,
    });
  };

  const submitAddUser = (e) => {
    Todolist.name.push(Todo.name);
    setTodo({
      ...Todo,
      name: "",
    });
  };
  
  return (
    <> 
     <div className="containerr">
    <div className="app-wrapperr-todo">
      <div className="text-lg-left">
        <form className="col-md-8 text-left m-auto">
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-lg-left"
            >
             <h1> To-Do App! </h1>  
             <h6> Add New To-Do  </h6>  
            </label>
            <input
              type="text"
              className="form-control"
              name="todo"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={(e) => submitAddUser(e)}
          >
            Add
          </button>
        </form>
        <Watch name={Todolist.name} />
      </div>
      </div>
      </div>
    </>
  );
}
