// export const getUser = (req, res) => {
//     res.json({
//         id: req.params.id,
//         name: req.query.name,
//         age: req.query.age
//     })
// }

let users = [
  { id: 1, name: "Echa", age: 21 },
  { id: 2, name: "Budi", age: 22 },
  { id: 3, name: "Asisyah", age: 23 },
];

// read data user
export const getUser = (req, res) => {
  res.json(users);
};

// read data user berdasarkan id
export const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User tidak ditemukan",
    });
  }
  res.json(user);
};

// create data user
export const createUser = (req, res) => {
  const { name, age } = req.body;

  if (!name && !age) {
    return res.status(404).json({ message: "Nama dan Umur harus diisi" });
  }

  const newUSer = {
    id: users.length + 1, //sama seperti auto increment
    name,
    age,
  };

  users.push(newUSer);
  res.status(201).json(newUSer);
};

// update data user
export const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const { name, age } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User Tidak Ditemukan" });
  }

  user.name = name || user.name;
  user.age = age || user.age;

  res.status(200).json(user);
};

// delete data user
export const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.status(200).json({
    message: "User berhasil dihapus",
  });
};


