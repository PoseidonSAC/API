import express from "express";
import { Routes } from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";
//all allowed origins
const corsOptions = {
  origin: "*",
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
