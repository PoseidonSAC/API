import { Router } from "express";
import { FishingRoutes } from "./fishing/fishing.routes";
import { TravelRoutes } from "./travel/travel.routes";
import { OtherCostTravelRoutes } from "./other_cost_travel/oher_cost_travel.routes";
export class FishingOperationRoutes {
  private FishingRoutes = new FishingRoutes();
  private TravelRoutes = new TravelRoutes();
  private OtherCostTravelRoutes = new OtherCostTravelRoutes();
  private router = Router();

  constructor() {
    this.router.use("/fishing", this.FishingRoutes.getRoutes());
    this.router.use("/travel", this.TravelRoutes.getRoutes());
    this.router.use(
      "/other-cost-travel",
      this.OtherCostTravelRoutes.getRoutes()
    );
  }

  getRoutes() {
    return this.router;
  }
}
