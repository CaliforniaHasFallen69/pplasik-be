import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
//   updateUser,
//   deleteUser,
} from "../controllers/Operator.js";
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/operator", getUsers);
router.get("/operator/:id", getUserById);
router.post("/operator", createUser);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
