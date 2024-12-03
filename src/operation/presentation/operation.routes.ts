import { Router } from "express";
export class OperationRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  setRoutes() {
    return this.router;
  }
}
