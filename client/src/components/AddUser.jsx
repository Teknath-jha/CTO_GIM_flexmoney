<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> 23fbab02ee3fd93824b597771ecc6eb4ed5ca6ee
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

<<<<<<< HEAD
import { addUser } from "../service/api";

=======
>>>>>>> 23fbab02ee3fd93824b597771ecc6eb4ed5ca6ee
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

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={() => onValueChange()} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>Batch</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <Button variant="contained">ADD USER</Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
