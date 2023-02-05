import { CheckBox } from "@mui/icons-material";
import { InputBase, ListItem } from "@mui/material";
import { useState } from "react";

const Todo = (props) => {
  const [item, setItem] = useState(props.item);

  return (
    <ListItem>
      <CheckBox checked={item.done} />
      <InputBase
        inputProps={{ "aria-label": "naked" }}
        type="text"
        id={item.id}
        name={item.id}
        value={item.title}
        multiline={true}
        fullWidth={true}
      />
    </ListItem>
  );
};
export default Todo;
