import express from "express";
import  userRouter from "./router/userRouter";
import  linkTreeRouter from "./router/linktree.router"

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Link Tree" });
});

// Routes
app.use("/api/v1/user", userRouter);
// Links Routes
app.use("/api/v1/link", linkTreeRouter); 

export default app;
