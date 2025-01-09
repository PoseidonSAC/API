import { Router } from "express";

import { VehicleRouteDetailController } from "./controller";

export class VehicleRouteDetailRoutes {
  private router = Router();
  private controller = new VehicleRouteDetailController();
  constructor() {
    this.router.get("/", this.controller.getAll);
    this.router.post("/", this.controller.create);
    this.router.put("/:id", this.controller.update);
    this.router.delete("/:id", this.controller.delete);
    this.router.get("/:id", this.controller.getById);
    this.router.get("/vehicle-route/:id", this.controller.getByVehicleRouteId);
  }

  getRoutes() {
    return this.router;
  }
}
