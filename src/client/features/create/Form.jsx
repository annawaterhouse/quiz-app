import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import PropTypes from 'prop-types';

export default function Form({ handleClose }) {
  const [data, setData] = useState({ category: "", question: "", answer: "" });
  console.log(data);
  
  Form.propTypes = {
    handleClose: PropTypes.func.isRequired
  };
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
  };


  return (
    <Card style={style} sx={{ minWidth: 275 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="category"
          onChange={(e) => setData({ ...data, category: e.target.value })}
        >
          <MenuItem value={"ds"}>Data Structures</MenuItem>
          <MenuItem value={"js"}>Javascript</MenuItem>
          <MenuItem value={"react"}>React</MenuItem>
        </Select>
        <TextField
          id="standard-multiline-flexible"
          label="question"
          multiline
          maxRows={20}
          variant="standard"
          onChange={(e) => setData({ ...data, question: e.target.value })}
        />
        <TextField
          id="standard-multiline-flexible"
          label="answer"
          multiline
          maxRows={20}
          variant="standard"
          onChange={(e) => setData({ ...data, answer: e.target.value })}
        />
        <button onClick={handleClose}>Submit</button>
      </FormControl>
    </Card>
  );
}
