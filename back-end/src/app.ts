import express, { json } from "express";
import cors from "cors";
import router from "./routes";

const app = express();
app.use(json());
app.use(cors());
app.use(router);

export default app;
