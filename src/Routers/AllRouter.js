import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import AdminProductRouter from "./AdminProductRouter/AdminProductRouter.js";
const AllRouter = Router();

AllRouter.use("/auth", AuthRouter);
AllRouter.use("/admin/dashboard/products", AdminProductRouter);

export default AllRouter;
