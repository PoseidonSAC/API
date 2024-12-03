import { Router } from "express";

export class RouteRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all route");
    });
    this.router.post("/", (req, res) => {
      console.log("create route");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update route");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete route");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get route by id");
    });

    return this.router;
  }
}
