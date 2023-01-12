const List = ({lists}) => {
  const complete = () => {

  }
  return (
    <>
     {lists.map(list => {
      return (
        <div key={list.key}>
          <button onClick={complete}>完了</button>
          <span>{list.content}</span>
        </div>
      )
     })}
    </>
  );
};

export default List;