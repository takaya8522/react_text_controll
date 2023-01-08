const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/*{animalList}  {helloAnimals} */}
        {
          /* POINT 子要素にKeyキーを設定 */
          animals.map((animal) => (
            <li key={animal}>Hello, {animal}</li>
          ))
        }
      </ul>
    </>
  );
};

export default Example;
