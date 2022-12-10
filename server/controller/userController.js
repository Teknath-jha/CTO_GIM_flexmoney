import User from "../model/userSchema.js";

export const addUser = async(request, response) => {
  const user = request.body;

  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({message:error.message});
    console.log(error);
  }

};
