import { Router } from "express";
import { RouteRoutes } from "./route/route.routes";
import { VehicleRouteRoutes } from "./vehicle_route/vehicle_route.routes";
import { VehicleRouteOtherCostRoutes } from "./vehicle_route_other_cost/vehicle_route_other_cost.routes";
import { VehicleRoutes } from "./vehicle_routes/vehicle_routes.routes";

export class TransportationRoutes {
  private router = Router();
  private routeRoutes = new RouteRoutes();
  private vehicleRouteRoutes = new VehicleRouteRoutes();
  private vehicleRouteOtherCostRoutes = new VehicleRouteOtherCostRoutes();
  private vehicleRoutes = new VehicleRoutes();

  constructor() {
    this.router.use("/routes", this.routeRoutes.getRoutes());
    this.router.use("/vehicle-routes", this.vehicleRouteRoutes.getRoutes());
    this.router.use(
      "/vehicle-route-other-costs",
      this.vehicleRouteOtherCostRoutes.getRoutes()
    );
    this.router.use("/vehicles", this.vehicleRoutes.getRoutes());
  }

  getRoutes() {
    return this.router;
  }
}
