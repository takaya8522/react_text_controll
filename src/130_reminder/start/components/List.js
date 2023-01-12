const List = ({lists, deleteList}) => {
  const complete = (id) => {
    deleteList(id)
  }
  return (
    <>
     {lists.map(list => {
      return (
        <div key={list.id}>
          <button onClick={() => complete(list.id)}>完了</button>
          <span>{list.content}</span>
        </div>
      )
     })}
    </>
  );
};

export default List;