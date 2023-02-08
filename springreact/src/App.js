import {
  AppBar,
  Button,
  Container,
  Grid,
  List,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/todo/Todo";
import { call, signout } from "./service/ApiService";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    call("/todo", "GET", null).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item).then((response) => setItems(response.data));
  };
  const deleteTodo = (item) => {
    call("/todo", "DELETE", item).then((response) => setItems(response.data));
  };
  const editItem = (item) => {
    call("/todo", "PUT", item).then((response) => setItems(response.data));
  };
  let todoItems = items.length > 0 && (
    <Paper style={{ margin: "16" }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            deleteItem={deleteTodo}
            editItem={editItem}
          />
        ))}
      </List>
    </Paper>
  );

  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">오늘의 할일</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" raised onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
  /*로딩 중이 아닐 때 렌더링 할 부분 */

  let todoListpage = (
    <div className="App">
      {navigationBar}
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="App">{todoItems}</div>
      </Container>
    </div>
  );
  let loadingPage = <h1>로딩중</h1>;
  let content = loadingPage;
  if (!loading) {
    content = todoListpage;
  }
  return <div className="App">{content}</div>;
};

export default App;
