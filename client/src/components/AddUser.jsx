import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  email: "",
  phone: "",
  batch: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const [batch, setBatch] = useState("");

  const navigate = useNavigate();

  const onValueChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    if (e.target.name === "batch" && e.target.value !== "")
      setBatch(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <InputLabel>Select batch</InputLabel>
        <Select
          labelId="batch_id"
          name="batch"
          id="batch-select"
          value={batch}
          label="batch-label"
          onChange={(e) => onValueChange(e)}
        >
          <MenuItem value={"A"}>A [5-6PM]</MenuItem>
          <MenuItem value={"B"}>B [6-7AM]</MenuItem>
          <MenuItem value={"C"}>C [7-8AM]</MenuItem>
          <MenuItem value={"D"}>D [8-9AM]</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          ADD USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
