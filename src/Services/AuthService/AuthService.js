import AdminModel from "../../Models/AdminModel/AdminModel.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

const AuthService = {
  registerAdmin: async (adminData) => {
    const { name, email, password } = adminData;
    const adminExist = await AdminModel.findOne({ where: { email } });

    if (adminExist) {
      throw new Error("Admin with this Email already exists");
    }

    const hashedPassword = await hash(password, 10);

    const newAdmin = await AdminModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return newAdmin;
  },
  loginAdmin: async (req, adminData) => {
    const { email, password } = adminData;
    const admin = await AdminModel.findOne({ where: { email } });
    if (!admin) {
      throw new Error(`Admin with this ${email} do not exist`);
    }
    const comparedPassword = await compare(password, admin.password);
    if (!comparedPassword) {
      throw new Error(`Invalid Password`);
    }
    const data = {
      id: admin.id,
      email: admin.email,
    };
    const token = jwt.sign(data, process.env.JWTSECRET, {
      expiresIn: "14d",
    });
    req.session.token = token;
    req.session.admin = data;
    await req.session.save();
    return {
      token,
      data,
    };
  },
};

export default AuthService;
