import { Router } from "express";

import AdminCategoryController from "../../Controller/AdminCategoryController/AdminCategoryController.js";
import AdminCategoryValidator from "../../Validator/AdminCategoryValidator/AdminCategoryValidator.js";
import AuthenticateMiddleware from "../../Middleware/Authenticate.js";

const AdminCategoryRouter = Router();

AdminCategoryRouter.post(
  "/create_category",
  AuthenticateMiddleware,
  AdminCategoryValidator.createCategory,
  AdminCategoryController.createCategory
);
AdminCategoryRouter.get(
  "/category_listing",
  AuthenticateMiddleware,
  AdminCategoryController.getCategory
);
AdminCategoryRouter.put(
  "/:category_id/update_category",
  AuthenticateMiddleware,
  AdminCategoryController.updateCategory
);
AdminCategoryRouter.delete(
  "/:category_id/delete_category",
  AuthenticateMiddleware,
  AdminCategoryController.deleteCategory
);

export default AdminCategoryRouter;
