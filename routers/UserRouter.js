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
  getFlower,
  allFlower,
  cityWiseFlower,
  nurseryInYourArea,
} from "../controllers/UserController.js";
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

router.route("/flower/:flowerId").get(isAuthenticated, getFlower);

router.route("/allflower").get(isAuthenticated, allFlower);
router
  .route("/citywiseflower/:flowerCity")
  .get(isAuthenticated, cityWiseFlower);

router.route("/allnursery/:cityName").get(isAuthenticated, nurseryInYourArea);

export default router;
