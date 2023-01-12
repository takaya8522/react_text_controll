import { useState } from "react";

const Form = ({ createList }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = () => {
    const newList = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };
    createList(newList);
    setEnteredTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => {
          setEnteredTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>追加</button>
      <span>{enteredTodo}</span>
    </div>
  );
};

export default Form;
