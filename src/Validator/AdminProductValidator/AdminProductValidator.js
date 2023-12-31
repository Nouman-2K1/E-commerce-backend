import Joi from "joi";

const AdminProductValidator = {
  createProduct: (req, res, next) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        name: Joi.string().max(20).required(),
        category: Joi.string().required(),
        description: Joi.string().max(100).required(),
        quantity: Joi.number().max(100).required(),
        cost: Joi.number().min(1).required(),
        sales_price: Joi.number().min(1).required(),
        image: Joi.string().required(),
      });
      const { error, value } = schema.validate(data);
      if (error) {
        return res.status(400).json({ messgae: "Invalid input", error });
      }
      next();
    } catch (error) {
      return res.status(500).json({ messgae: "bad data", error });
    }
  },
};

export default AdminProductValidator;
