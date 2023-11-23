import express from "express";
import {
  getKhs,
  getKhsById,
  createKhs,
    updateKhs,
  //   deleteUser,
} from "../controllers/Khs.js";
import { getMahasiswa } from "../controllers/Mahasiswa.js";
import { isAuthenticated, isMahasiswa } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/khs", isAuthenticated, isMahasiswa, getKhs, getMahasiswa);
router.get("/khs/:id", isMahasiswa, getKhsById);
router.post("/khs", isAuthenticated, isMahasiswa, createKhs);
router.put("/khs",  isAuthenticated, updateKhs);
// router.delete("/operator/:id", deleteUser);
export default router;
