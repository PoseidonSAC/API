import express from "express";
import { Routes } from "./routes";
import cookieParser from "cookie-parser";
export class Server {
  constructor(private port: string) {
    this.port = port;
  }

  run = () => {
    const app = express();
    const routes = new Routes();

    app.use(express.json());
    app.use(cookieParser());
    app.use(routes.setPublicRoutes());
    app.use(routes.setPrivateRoutes());

    app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  };
}
