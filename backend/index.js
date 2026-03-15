import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import authRoutes from "./routes/auth.routes.js";
import customersRoutes from "./routes/customers.routes.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/customers', customersRoutes);

app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
