import Joi from "joi";

const AdminCategoryValidator = {
  createCategory: (req, res, next) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        name: Joi.string().max(50).required(),
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

export default AdminCategoryValidator;
