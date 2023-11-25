import express from "express";
import {
  getUsers,
  getUserById,
  createDepartemen,
  //   updateUser,
  //   deleteUser,
} from "../controllers/Departemen.js";
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/departemen", getUsers);
router.get("/departemen/:id", getUserById);
router.post("/departemen", createDepartemen);
// router.patch("/departemen/:id", updateUser);
// router.delete("/departemen/:id", deleteUser);
export default router;
