import { Router } from "express";
export class SalesRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    return this.router;
  }
}
