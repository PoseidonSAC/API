import { Router } from "express";

export class ClientRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all client");
    });
    this.router.post("/", (req, res) => {
      console.log("create client");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update client");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete client");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get client by id");
    });

    return this.router;
  }
}
