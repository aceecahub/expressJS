import express from "express";
import userRoutes from "./routes/user.routes.js";
import path from "path";

const __dirname = path.resolve();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");    
})

app.get('/pages', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/users/index.html'));
})

app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/users/create.html'));
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
