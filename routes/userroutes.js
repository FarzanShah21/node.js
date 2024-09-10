import express from 'express';
import { DeleteUser, GetUser, login, Logout, refreshtoken, register, UpdateUser } from '../controller/usercontroller.js';
const routes = express.Router();

routes.route("/register").post(register)
routes.route("/getuser").get(GetUser)
routes.route("/update/:id").put(UpdateUser)
routes.route("/delete/:id").delete(DeleteUser)
routes.route("/login").post(login)
routes.route("/logout").post(Logout)
routes.route("/refreshtoken").post(refreshtoken)
export default routes;