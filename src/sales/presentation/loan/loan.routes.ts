import { Router } from "express";

export class LoanRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all loan");
    });
    this.router.post("/", (req, res) => {
      console.log("create loan");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update loan");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete loan");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get loan by id");
    });

    return this.router;
  }
}
