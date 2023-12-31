import AdminProductService from "../../Services/AdminProductService/AdminProductService.js";

const AdminProductController = {
  createProduct: async (req, res) => {
    try {
      const product = await AdminProductService.createProduct(req.body);
      return res.status(201).json({ message: "product added successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error occured while adding product", error });
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const product = await AdminProductService.getAllProduct();
      return res.status(201).json({ product });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error occured while getting product", error });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const productId = req.params.product_id;
      const product = await AdminProductService.updateProduct(
        productId,
        req.body
      );
      return res.status(201).json({ message: "product updated successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error occured while Updating product", error });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.product_id;
      const product = await AdminProductService.deleteProduct(
        productId,
        req.body
      );
      return res.status(201).json({ message: "product deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error occured while deleting product", error });
    }
  },
};

export default AdminProductController;
