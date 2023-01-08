import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  return (
    <>
      <h3>配列のフィルター</h3>
      <ul>
        {animals
          .map((animal) => (
          <li>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
