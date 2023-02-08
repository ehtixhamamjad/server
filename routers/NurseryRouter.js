import express from "express";
import {
  register,
  verify,
  login,
  logout,
  addPlans,
  removePlans,
  updatePlans,
  getMyProfile,
  updateProfile,
  updatePassword,
  forgetPassword,
  resetPassword,
  upload,
} from "../controllers/NurseryController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
// router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/profile").get(isAuthenticated, getMyProfile);

router.route("/newPlans").post(isAuthenticated, addPlans);
router
  .route("/plan/:planId")
  .get(isAuthenticated, updatePlans)
  .delete(isAuthenticated, removePlans);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);

router.route("/upload").post(upload);

export default router;
