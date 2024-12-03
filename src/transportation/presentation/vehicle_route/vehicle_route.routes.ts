import { Router } from "express";

export class VehicleRouteRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all vehicle route");
    });
    this.router.post("/", (req, res) => {
      console.log("create vehicle route");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update vehicle route");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete vehicle route");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get vehicle route by id");
    });
    return this.router;
  }
}
