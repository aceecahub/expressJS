import express from "express";

const app = express();
const port = 4000;

// Routes dasar
app.get("/", (req, res) => {
  res.send("Hello, World!");
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

app.get("/users", (req, res) => {   // basic GET method
  res.send("GET Users");
});

// app.get("/users/:id", (req, res) => {  // GET method dengan parameter
//     res.send(`User ID: ${req.params.id}`);
// });

app.use(express.json()); // Middleware untuk parsing JSON

app.post("/users", (req, res) => {
  console.log(req.body);
  res.json(
    {message: "User Diterima", data: req.body}
  )
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


// tugas 2 dari mentor
app.post("/login", (req, res) => {
    res.json(
        {username: req.body.username, password: req.body.password}
    )
});

app.get("/users/:id", (req, res) => {
    res.json(
        {id: req.params.id}
    )
});

app.get("/products", (req, res) => {
    res.json(
        {category: req.query.category}
    )
});

app.listen(port, () => {    
  console.log(`Server is running at http://localhost:${port}`);
});
