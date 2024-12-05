import { Router } from "express";
import { VehicleController } from "./../../../operation/presentation/vehicle/vehicle.controller";

export class VehicleRoutes {
  private router = Router();
  private controller = new VehicleController();
  constructor() {
    this.router.get("/", this.controller.getAll);
    this.router.get("/:id", this.controller.getById);
    this.router.post("/", this.controller.create);
    this.router.put("/:id", this.controller.update);
    this.router.delete("/:id", this.controller.delete);
  }

  getRoutes() {
    return this.router;
  }
}
