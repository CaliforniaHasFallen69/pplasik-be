import express from "express";
import {
  getMahasiswa,
  getMahasiswaById,
  updateMhs
  //   updateUser,
  //   deleteUser,
} from "../controllers/Mahasiswa.js";
import { isAuthenticated, isMahasiswa } from "../middleware/AuthUser.js";
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/mahasiswa", getMahasiswa);
router.get("/mahasiswa/:id", getMahasiswaById);
router.put("/updtmahasiswa", isAuthenticated, isMahasiswa, updateMhs);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
