import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
import { createUserMhs, createUserMhsCsv } from "../controllers/Mahasiswa.js";
import { isAuthenticated, isOperator } from "../middleware/AuthUser.js";
import { Me } from "../controllers/Auth.js";

const router = express.Router();

router.get("/users", isAuthenticated, isOperator, getUsers);
router.get("/users/:id", isAuthenticated, isOperator, getUserById);
router.post("/users", createUser);
router.post("/usersmhs", isAuthenticated, isOperator, createUserMhs);
router.post("/usersmhscsv", isAuthenticated, isOperator, createUserMhsCsv);
router.patch("/users/:id", isAuthenticated, isOperator, updateUser);
router.delete("/users/:id", isAuthenticated, isOperator, deleteUser);
router.get("/me", isAuthenticated, Me);
export default router;
