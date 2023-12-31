import { Router } from "express";
import AuthController from "../../Controller/AuthController/AuthController.js";
import AuthValidator from "../../Validator/AuthValidator/AuthValidator.js";

const AuthRouter = Router();

AuthRouter.post(
  "/register",
  AuthValidator.registerAdmin,

  AuthController.registerAdmin
);
AuthRouter.post("/login", AuthValidator.loginAdmin, AuthController.loginAdmin);

export default AuthRouter;
