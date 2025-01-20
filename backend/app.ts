import express from "express";
import userRouter from "../backend/src/router/userRouter";
import linkTreeRouter from "../backend/src/router/linktree.router";
import cors from 'cors'

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Welcome Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Link Tree" });
});

// Routes
app.use("/api/v1/user", userRouter);
// Links Routes
app.use("/api/v1/link", linkTreeRouter);

export default app;
