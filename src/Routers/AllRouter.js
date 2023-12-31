import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import AdminProductRouter from "./AdminProductRouter/AdminProductRouter.js";
import AdminCategoryRouter from "./AdminCategoryRouter/AdminCategoryRouter.js";
const AllRouter = Router();

AllRouter.use("/auth", AuthRouter);
AllRouter.use("/admin/dashboard/products", AdminProductRouter);
AllRouter.use("/admin/dashboard/categories", AdminCategoryRouter);

export default AllRouter;
