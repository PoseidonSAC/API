import { Router } from "express";

export class OtherCostTravelRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all other cost travel");
    });
    this.router.post("/", (req, res) => {
      console.log("create other cost travel");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update other cost travel");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete other cost travel");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get other cost travel by id");
    });

    return this.router;
  }
}
