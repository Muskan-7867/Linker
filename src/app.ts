import express from "express";

import userRouter from "./router/userRouter"; 


const app = express();

// Middleware
app.use(express.json());

// Welcome Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Link Tree" });
});

// Routes
app.use("/api/v1/user", userRouter);

// Links Routes
app.post("/api/v1/links", userRouter); 
app.put("/api/v1/links/:id", userRouter); 

export default app;
