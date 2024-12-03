import { Router } from "express";
export class FishingRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all fishing");
    });
    this.router.post("/", (req, res) => {
      console.log("create fishing");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update fishing");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete fishing");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get fishing by id");
    });

    return this.router;
  }
}
