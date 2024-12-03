import { Router } from "express";

export class VehicleRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all vehicle");
    });
    this.router.post("/", (req, res) => {
      console.log("create vehicle");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update vehicle");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete vehicle");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get vehicle by id");
    });

    return this.router;
  }
}
