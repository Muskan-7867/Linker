import app from "../backend/app";
import connectDB from "./src/config/db";
const startServer = async () => {

    await connectDB()
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
    })
}
startServer()