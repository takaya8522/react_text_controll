import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todoLists = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  const [ lists, setList ] = useState(todoLists);

  return (
    <>
      <List lists={lists}/>
      <Form />
    </>
  );
};

export default Todo;
