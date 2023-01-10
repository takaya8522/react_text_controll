import Profile from "./components/Profile";
const persons = [
  { name: "Geo", age: 18, hobbies: ["sports", "music"] },
  { name: "Tom", age: 25, hobbies: ["movie", "music"] },
  { name: "Lisa", age: 21, hobbies: ["sports", "travel", "game"] },
];

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {/* <Profile name={"Geo"} age={18} hobbies={["sports", "music"]} />
        <Profile name={"Tom"} age={25} hobbies={["movie", "music"]} />
        <Profile
          name={"Lisa"}
          age={21}
          hobbies={["sports", "travel", "game"]}
        /> */}
        {persons.map((person) => (
          <li key={person.name}>
            {/* <Profile
              name={person.name}
              age={person.age}
              hobbies={person.hobbies}
            /> */}
            <Profile {...person}/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
