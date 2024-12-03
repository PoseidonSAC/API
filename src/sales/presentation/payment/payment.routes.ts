import { Router } from "express";

export class PaymentRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all payment");
    });
    this.router.post("/", (req, res) => {
      console.log("create payment");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update payment");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete payment");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get payment by id");
    });

    return this.router;
  }
}
