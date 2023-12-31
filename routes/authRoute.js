import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  protectRouteController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);

//text route
router.get("/test", requireSignIn, isAdmin, testController);

//protected user route
router.get("/user-auth", requireSignIn, protectRouteController);

//admin protected route
router.get("/admin-auth", requireSignIn, isAdmin, protectRouteController);

//update-profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all-orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//status update-orders
router.put("/order-status/:oid", requireSignIn, isAdmin, orderStatusController);

export default router;
