import express from "express";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use(express.json());
app.use('/users', userRoutes);

app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
