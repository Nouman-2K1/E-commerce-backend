import AuthService from "../../Services/AuthService/AuthService.js";

const AuthController = {
  registerAdmin: async (req, res) => {
    try {
      const admin = await AuthService.registerAdmin(req.body);
      return res
        .status(201)
        .json({ message: "Admin registrer successfully", admin });
    } catch (error) {
      return res.status(500).json({ message: "Bad Request" });
    }
  },
  loginAdmin: async (req, res) => {
    try {
      const user = await AuthService.loginAdmin(req, req.body);
      const { token, data } = user;
      return res
        .status(200)
        .json({ message: "User Loged in Sussceefully", token, data });
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "Bad Requset" });
    }
  },
};

export default AuthController;
