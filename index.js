import express from "express";
import cors from "cors";

import { MongoClient } from "mongodb";

const app = express();
const PORT = process.env.PORT || 5000;

// middle were
app.use(express.json());
app.use(cors());

const client = new MongoClient(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.send("running hireloop");
});

app.listen(PORT, () => {
  console.log(`server runing on port: ${PORT}`);
});
