import { Router } from "express";

export class TravelRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    this.router.get("/", (req, res) => {
      console.log("get all travel");
    });
    this.router.post("/", (req, res) => {
      console.log("create travel");
    });
    this.router.put("/:id", (req, res) => {
      console.log("update travel");
    });
    this.router.delete("/:id", (req, res) => {
      console.log("delete travel");
    });
    this.router.get("/:id", (req, res) => {
      console.log("get travel by id");
    });

    // TODO RESUMEN DEL VIAJE GASTOS SUMA DE GASTOS + GASTOS DE VIAJE + GANANCIA + DIVISION DE GANANCIA

    return this.router;
  }
}
