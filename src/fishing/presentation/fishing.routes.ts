import { Router } from "express";
import { BoatRouter } from "./boat/boat.routes";
export class FishingRoutes {
  private BoatRouter = new BoatRouter();
  private router: Router;

  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.use("/boat", this.BoatRouter.setRoutes());
    return this.router;
  }
}
