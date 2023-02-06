import { DeleteOutlined } from "@mui/icons-material";
import {
  InputBase,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { useState } from "react";

const Todo = (props) => {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;
  //deleteEventHandler작성
  const deleteEventHandler = () => {
    deleteItem(item);
  };
  //turnOffReadOnly 함수 작성
  const turnOffReadOnly = () => {
    setReadOnly(false);
  };
  const turnOnReadOnly = (e) => {
    if (e.key === "Enter" && readOnly === false) {
      setReadOnly(true);
      editItem(item);
    }
  };
  //업데이트 함수
  const editEventHandler = (e) => {
    setItem({ ...item, title: e.target.value });
  };
  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem(item);
  };
  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          onClick={turnOffReadOnly}
          onKeyPress={turnOnReadOnly}
          onChange={editEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default Todo;
