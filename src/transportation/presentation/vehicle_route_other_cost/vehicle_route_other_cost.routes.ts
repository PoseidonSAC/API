import { Router } from "express";

export class VehicleRouteOtherCostRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all vehicle route other cost");
    });
    this.router.post("/", (req, res) => {
      console.log("create vehicle route other cost");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update vehicle route other cost");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete vehicle route other cost");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get vehicle route other cost by id");
    });
    return this.router;
  }
}
