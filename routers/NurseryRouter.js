import express from "express";
import {
  register,
  verify,
  login,
  logout,
  addFlowers,
  getFlower,
  updateFlower,
  removeFlower,
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

router.route("/addFlowers").post(isAuthenticated, addFlowers);

router.route("/flower/:flowerId").get(isAuthenticated, getFlower);

router
  .route("/flower/:flowerId")
  .get(isAuthenticated, updateFlower)
  .delete(isAuthenticated, removeFlower);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword").put(resetPassword);

router.route("/upload").post(upload);

export default router;
