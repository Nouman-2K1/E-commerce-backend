import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is listning at http://localhost:${port}`);
  }
});
