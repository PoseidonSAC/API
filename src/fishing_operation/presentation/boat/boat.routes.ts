import { Router } from "express";
import { BoatController } from "./boat.controller";
export class BoatRouter {
  private router = Router();
  private controller = new BoatController();
  constructor() {
    this.router.get("/", this.controller.getAll);
    this.router.post("/", this.controller.create);
    this.router.put("/:id", this.controller.update);
    this.router.delete("/:id", this.controller.delete);
    this.router.get("/:id", this.controller.getbyId);
  }
  gettRoutes() {
    return this.router;
  }
}
