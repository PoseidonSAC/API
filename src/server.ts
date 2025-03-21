import express from "express";
import { Routes } from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";
const corsOptions = {
  origin: [
    "https://app-production-82ec.up.railway.app",
    "http://localhost:5173",
  ],
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

export class Server {
  constructor(private port: string) {
    this.port = port;
  }

  run = () => {
    const app = express();
    const routes = new Routes();
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(cookieParser());
    app.use(routes.setPublicRoutes());
    app.use(routes.setPrivateRoutes());

    app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  };
}
