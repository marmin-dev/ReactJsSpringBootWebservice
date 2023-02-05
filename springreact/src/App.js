import { Container, List, Paper } from "@mui/material";
import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/todo/todo";

const App = () => {
  const [items, setItems] = useState([
    {
      id: "0",
      title: "Hello World",
      done: true,
    },
    {
      id: "1",
      title: "Hello World",
      done: false,
    },
  ]);
  let todoItems = items.length > 0 && (
    <Paper style={{ margin: "16" }}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className="App">
      <Container madWidth="md">
        <AddTodo />
        <div className="App">{todoItems}</div>
      </Container>
    </div>
  );
};

export default App;
