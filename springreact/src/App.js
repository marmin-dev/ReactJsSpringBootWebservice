import { useState } from "react";
import "./App.css";
import Todo from "./components/todo/todo";

const App = () => {
  const [item, setItem] = useState({
    id: "0",
    title: "Hello World",
    done: true,
  });
  return (
    <div className="App">
      <Todo item={item} />
    </div>
  );
};

export default App;
