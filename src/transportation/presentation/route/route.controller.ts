import { Response, Request } from "express";

import {
  CreateRouteUseCase,
  DeleteRouteUseCase,
  FindByIdRouteUseCase,
  GetAllRouteUseCase,
  UpdateRouteUseCase,
} from "../../domain/usecases/route";

export class RouteController {
  private createRouteUseCase = new CreateRouteUseCase();
  private deleteRouteUseCase = new DeleteRouteUseCase();
  private findByIdRouteUseCase = new FindByIdRouteUseCase();
  private getAllRouteUseCase = new GetAllRouteUseCase();
  private updateRouteUseCase = new UpdateRouteUseCase();

  create = async (req: Request, res: Response) => {
    const route = req.body;
    const newRoute = await this.createRouteUseCase.execute(route);
    res.status(201).json(newRoute);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const route = req.body;
    await this.updateRouteUseCase.execute(id, route);
    res.status(204).send();
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteRouteUseCase.execute(id);
    res.status(204).send();
    return;
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const route = await this.findByIdRouteUseCase.execute(id);
    res.status(200).json(route);
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const route = await this.getAllRouteUseCase.execute();
    res.status(200).json(route);
    return;
  };
}
