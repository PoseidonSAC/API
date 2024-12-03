import { Router } from "express";
import { UserController } from "./controller";

export class AuthRoutes {
  public router: Router;
  public controller = new UserController();
  constructor() {
    this.router = Router();
    this.controller = new UserController();
  }

  setRoutes() {
    this.router.post("/login", this.controller.login);
    this.router.post("/register", this.controller.register);

    return this.router;
  }
}
