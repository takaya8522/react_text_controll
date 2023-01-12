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

  const [lists, setList] = useState(todoLists);

  const deleteList = (id) => {
    const newLists = lists.filter((list) => {
      return list.id !== id;
    });
    setList(newLists);
  };

  const createTodo = (todo) => {
    setList([...lists, todo]);
  };

  return (
    <>
      <List todoLists={lists} deleteList={deleteList} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;
