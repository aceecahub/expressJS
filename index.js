import express from "express";

const app = express();
const port = 4000;

// // middleware untuk otentikasi per route
// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization;

//   if(!token) {
//     return res.status(401).json(
//       { message: "Unauthorized" }
//     );
//   }
//   next();
// };

// middleware dasar dan global
// app.use((req, res, next) =>{
//   console.log('Ada request masuk ke server'); //ini pesan jika nanti ada user ang akses server tanpa izin
//   next();
// })

// Routes dasar
app.get("/", (req, res) => {  //pakai variabel middleware diatas sesudah path "/", contoh: app.get("/", authMiddleware, (req, res) => {}
  res.send("Hello, Express JS!");
});

app.get("/about", (req, res) => {
  res.json({
    name: "ExpressJS Application",
    version: "1.0.0",
    description: "A simple ExpressJS application",
  });
});

// Tugas dari mentor
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/api/products", (req, res) => {
  res.json({
    products: [
      { id: 1, name: "Product 1", price: 1000 },
      { id: 2, name: "Product 2", price: 2000 },
    ],
  });
});

// Routes sesuai method HTTP

app.get("/users", (req, res) => {
  // basic GET method
  res.send("GET Users");
});

// app.get("/users/:id", (req, res) => {  // GET method dengan parameter
//     res.send(`User ID: ${req.params.id}`);
// });

app.use(express.json()); // Middleware untuk parsing JSON

app.post("/users", (req, res) => {
  console.log(req.body);
  res.json({ message: "User Diterima", data: req.body });
});
app.put("/users", (req, res) => {
  res.send("PUT Users");
});
app.delete("/users", (req, res) => {
  res.send("DELETE Users");
});

// search
app.get("/search", (req, res) => {
  res.json(req.query);
});

// middleware validasi login
const validateLogin = (req, res, next) => {
  const {email, password} =req.body;
  if(!email || !password) {
    return res.json(
      { message: "Email dan Password harus diisi" }
    )
  }
  next();
};

// tugas 2 dari mentor
app.post("/login", validateLogin, (req, res) => {
  res.json({ message: "Login Berhasil" });
});

// params (url dengan /)
app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});

// query (url dengan ?)
app.get("/products", (req, res) => {
  res.json(req.query);
});

// keduanya
app.get("/products/:id/orders", (req, res) => {
  res.json({
    id: req.params.id,
    order: req.query,
  });
});


// tugas middleware dari mentor

// middleware untuk logging request
const logMiddleware = (req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
}

app.use(logMiddleware);

const checkApiLogger = (req, res, next) => {
  const apiKey = req.headers['api-key'];

  if(!apiKey) {
    return res.status(403).json(
      { message: "Forbidden: API Key tidak ditemukan" }
    )
  }
  next();
}

app.get("/api/data", checkApiLogger, (req, res) => {
  res.json(
    { data: "Ini adalah data rahasia dari API" }
  )
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
