// import jwt from "jsonwebtoken";
// import { Admin } from "../models/AdminModel.model.js";

// export const isAuthenticated = async (req, res, next) => {
//   const { token } = req?.cookies;

//   if (!token) {
//     return res.status(500).json({ success: false, message: "Login First" });
//   }

//   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   req.admin = await Admin.findById(decoded._id);
//   next();
// };
