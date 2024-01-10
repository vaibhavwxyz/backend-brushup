import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at PORT at ${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB connection FAILED!!!", err));
