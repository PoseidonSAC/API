import { Response, Request } from "express";

import {
  CreateVehicleRouteUseCase,
  DeleteVehicleRouteUseCase,
  FindByIdVehicleRouteUseCase,
  GetAllVehicleRouteUseCase,
  UpdateVehicleRouteUseCase,
} from "../../domain/usecases/vehicle_route";

export class VehicleRouteController {
  private createVehicleRouteUseCase = new CreateVehicleRouteUseCase();
  private deleteVehicleRouteUseCase = new DeleteVehicleRouteUseCase();
  private findByIdVehicleRouteUseCase = new FindByIdVehicleRouteUseCase();
  private getAllVehicleRouteUseCase = new GetAllVehicleRouteUseCase();
  private updateVehicleRouteUseCase = new UpdateVehicleRouteUseCase();

  create = async (req: Request, res: Response) => {
    const vehicleRoute = req.body;
    const newVehicleRoute = await this.createVehicleRouteUseCase.execute(
      vehicleRoute
    );
    res.status(201).json(newVehicleRoute);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const vehicleRoute = req.body;
    await this.updateVehicleRouteUseCase.execute(id, vehicleRoute);
    res.status(204).send();
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteVehicleRouteUseCase.execute(id);
    res.status(204).send();
    return;
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const vehicleRoute = await this.findByIdVehicleRouteUseCase.execute(id);
    res.status(200).json(vehicleRoute);
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const vehicleRoute = await this.getAllVehicleRouteUseCase.execute();
    res.status(200).json(vehicleRoute);
    return;
  };
}
