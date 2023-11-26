import express from "express";
import {
  getSkripsi,
  getSkripsiById,
  createSkripsi,
  //   updateUser,
  //   deleteUser,
} from "../controllers/Skripsi.js";
import { getMahasiswa } from "../controllers/Mahasiswa.js";
import { isAuthenticated, isMahasiswa } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/skripsi", isAuthenticated, isMahasiswa, getSkripsi, getMahasiswa);
router.get("/skripsi/:id", isMahasiswa, getSkripsiById);
router.post("/skripsi", isAuthenticated, isMahasiswa, createSkripsi);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
