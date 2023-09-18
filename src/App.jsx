import data from "./data.json";
import { Albums } from "./Albums.jsx";
console.log(data);

export const App = (data) => {
  return (
    <div>
      <Albums data={data}/>
    </div>
  );
};
