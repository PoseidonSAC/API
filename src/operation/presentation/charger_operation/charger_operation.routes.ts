import { Router } from "express";

export class ChargerOperationRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all charger operation");
    });
    this.router.post("/", (req, res) => {
      console.log("create charger operation");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update charger operation");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete charger operation");
    });

    return this.router;
  }
}
