import express from "express";
const app = express();

//routers
import userRouter from './router/userRouter'


//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome to link tree" });
});

//router


app.use("/api/v1/user", userRouter);

export default app;
