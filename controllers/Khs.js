import Khs from "../models/KhsModel.js";
import Mahasiswa from "../models/MahasiswaModel.js";


export const getKhs = async (req, res) => {
  try {
    const response = await Khs.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getKhsById = async (req, res) => {
  try {
    const response = await Khs.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createKhs = async (req, res) => {
  const { semester, sks, skskumulatif, ipsemester, ipkumulatif } = req.body;
  const user = req.user;

  try {
    const mahasiswa = await Mahasiswa.findOne({
      where: { email: user.email }, // Ubah menjadi kolom yang sesuai jika perlu
    });
    // Pastikan NIM tersedia dalam data pengguna yang login
    if (!user || !mahasiswa) {
      return res
        .status(400)
        .json({ msg: "Informasi NIM tidak tersedia untuk pengguna ini" });
    }

    await Khs.create({
      semester: semester,
      sks: sks,
      skskumulatif: skskumulatif,
      ipsemester: ipsemester,
      ipkumulatif: ipkumulatif,
      NIM: mahasiswa.NIM, // Gunakan NIM dari informasi pengguna yang login
      status: "unapprove",
    });

    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// export const updateUser = async (req, res) => {
//   const { id } = req.params; // Mendapatkan ID pengguna dari parameter URL
//   const { name, email, role } = req.body; // Mendapatkan data yang akan diupdate dari body request

//   try {
//     // Mencari pengguna berdasarkan ID
//     const user = await User.findOne({ where: { uuid: id } });

//     // Jika pengguna tidak ditemukan, kembalikan respons 404 Not Found
//     if (!user) {
//       return res.status(404).json({ msg: "User tidak ditemukan" });
//     }

//     // Memperbarui data pengguna
//     user.name = name || user.name; // Jika name tidak disediakan, gunakan nilai yang ada
//     user.email = email || user.email; // Jika email tidak disediakan, gunakan nilai yang ada
//     user.role = role || user.role; // Jika role tidak disediakan, gunakan nilai yang ada

//     // Simpan perubahan ke database
//     await user.save();

//     // Mengembalikan respons sukses
//     res.status(200).json({ msg: "User berhasil diperbarui", user });
//   } catch (error) {
//     // Jika terjadi kesalahan, kirimkan respons 500 Internal Server Error
//     res.status(500).json({ msg: error.message });
//   }
// };

// export const deleteUser = async (req, res) => {
//   const { id } = req.params; // Mendapatkan ID pengguna dari parameter URL

//   try {
//     // Mencari pengguna berdasarkan ID
//     const user = await User.findOne({ where: { uuid: id } });

//     // Jika pengguna tidak ditemukan, kembalikan respons 404 Not Found
//     if (!user) {
//       return res.status(404).json({ msg: "User tidak ditemukan" });
//     }

//     // Menghapus pengguna dari database
//     await user.destroy();

//     // Mengembalikan respons sukses
//     res.status(200).json({ msg: "User berhasil dihapus" });
//   } catch (error) {
//     // Jika terjadi kesalahan, kirimkan respons 500 Internal Server Error
//     res.status(500).json({ msg: error.message });
//   }
// };
