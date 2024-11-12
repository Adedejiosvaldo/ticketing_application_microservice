import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode`
  );
});
