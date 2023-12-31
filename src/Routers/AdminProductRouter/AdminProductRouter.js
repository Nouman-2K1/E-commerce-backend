import { Router } from "express";
import AdminProductController from "../../Controller/AdminProductController/AdminProductController.js";
import AdminProductValidator from "../../Validator/AdminProductValidator/AdminProductValidator.js";
import AuthenticateMiddleware from "../../Middleware/Authenticate.js";

const AdminProductRouter = Router();

AdminProductRouter.post(
  "/create_product",
  AuthenticateMiddleware,
  AdminProductValidator.createProduct,
  AdminProductController.createProduct
);

AdminProductRouter.get(
  "/product_listing",
  AuthenticateMiddleware,
  AdminProductController.getAllProduct
);

AdminProductRouter.put(
  "/:product_id/update_product",
  AuthenticateMiddleware,
  AdminProductController.updateProduct
);

AdminProductRouter.delete(
  ":product_id/delete_product",
  AuthenticateMiddleware,
  AdminProductController.deleteProduct
);

export default AdminProductRouter;
