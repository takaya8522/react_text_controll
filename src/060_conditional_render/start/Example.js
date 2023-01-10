import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            // return <li key={animal}>{animal + (animal === "Dog" ? "⭐️" : "")}</li>
            // if(animal === "Dog") {
            //   return <li key={animal}>{animal}⭐️</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }
            return <li key={animal}>{
              animal}{(animal === "Dog" && "⭐️")}</li>
          })}
      </ul>
    </>
  );
};

export default Example;
