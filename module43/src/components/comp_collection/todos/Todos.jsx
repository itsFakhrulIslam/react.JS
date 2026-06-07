import { use } from "react";

const Todos = ({ todosLoader }) => {
  const todosData = use(todosLoader);
  console.log(todosData);

  return (
    <div>
      <h1>Todos Component page</h1>
    </div>
  );
};

export default Todos;
