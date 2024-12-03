import { Router } from "express";
export class TransportationRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    return this.router;
  }
}
