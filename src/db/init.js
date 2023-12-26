import AdminModel from "../Models/AdminModel/AdminModel.js";

const dbInit = async () => {
  await AdminModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
