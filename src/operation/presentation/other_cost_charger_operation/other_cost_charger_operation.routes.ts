import { Router } from "express";

export class OtherCostChargerOperationRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all other cost charger operation");
    });
    this.router.post("/", (req, res) => {
      console.log("create other cost charger operation");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update other cost charger operation");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete other cost charger operation");
    });

    return this.router;
  }
}
