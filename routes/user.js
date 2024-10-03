import { Router } from "express";
import { addRegister, addLogin, addLogout } from "../controllers/user.js";

const userRouter = Router();

//Define Routes
userRouter.post('/users/register', addRegister);

userRouter.post('/users/login', addLogin);

userRouter.post('/users/logout', addLogout);

//Export router
export default userRouter;