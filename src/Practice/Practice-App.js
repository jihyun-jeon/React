import { useState } from "react/cjs/react.development";

function PracticeApp() {
  const [todo, setTodo] = useState("");
  const onTodo = (e) => setTodo(() => e.target.value);

  const [todos, setTodos] = useState([]);
  const addBtn = (e) => {
    e.preventDefault();
    setTodos((prev) => prev.push({ txt: todo }));
    console.log(todos);
  };

  return (
    <>
      <h1>My Todos()</h1>
      <form onSubmit={addBtn}>
        <input type="text" placeholder="Write to do" onChange={onTodo} />
        <button type="submit">Add To Do</button>
      </form>
      <br />
      {/* {todos.map(() => (
        <li>
          {todos.txt}
          <button>x</button>
        </li>
      ))} */}
    </>
  );
}

export default PracticeApp;
