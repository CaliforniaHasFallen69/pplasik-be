import User from "../models/OperatorModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  const { NIP, nama, alamat, email, notelepon, fakultas, departemen } =
    req.body;
  try {
    await User.create({
      NIP: NIP,
      nama: nama,
      alamat: alamat,
      email: email,
      notelepon: notelepon,
      fakultas: fakultas,
      departemen: departemen 
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id; // Mendapatkan ID dari parameter URL
  const { NIP, nama, alamat, email, notelepon, fakultas, departemen } =
    req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    // Lakukan pembaruan data
    await user.update({
      NIP: NIP,
      nama: nama,
      alamat: alamat,
      email: email,
      notelepon: notelepon,
      fakultas: fakultas,
      departemen: departemen,
    });

    res.status(200).json({ msg: "Data user berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id; // Mendapatkan ID dari parameter URL

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    // Hapus user
    await user.destroy();

    res.status(200).json({ msg: "User berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

