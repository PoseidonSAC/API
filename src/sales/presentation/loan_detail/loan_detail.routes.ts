import { Router } from "express";

export class LoanDetailRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all loan detail");
    });
    this.router.post("/", (req, res) => {
      console.log("create loan detail");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update loan detail");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete loan detail");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get loan detail by id");
    });

    return this.router;
  }
}
