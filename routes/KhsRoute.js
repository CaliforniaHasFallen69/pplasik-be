import express from "express";
import {
  getKhs,
  getKhsById,
  // createUser,
  //   updateUser,
  //   deleteUser,
} from "../controllers/Khs.js";
import { getMahasiswa } from "../controllers/Mahasiswa.js";
import { isAuthenticated, isMahasiswa } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/khs", isAuthenticated, isMahasiswa, getKhs, getMahasiswa);
router.get("/khs/:id", isMahasiswa, getKhsById);
// router.post("/mahasiswa", createUser);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
