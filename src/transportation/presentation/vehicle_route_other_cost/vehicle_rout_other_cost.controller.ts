import { Response, Request } from "express";

import {
  CreateVehicleRouteOtherCostUseCase,
  DeleteVehicleRouteOtherCostUseCase,
  FindByIdVehicleRouteOtherCostUseCase,
  GetAllVehicleRouteOtherCostUseCase,
  UpdateVehicleRouteOtherCostUseCase,
} from "../../domain/usecases/vehicle_route_other_cost";

export class VehicleRouteOtherCostController {
  private createVehicleRouteOtherCostUseCase =
    new CreateVehicleRouteOtherCostUseCase();
  private deleteVehicleRouteOtherCostUseCase =
    new DeleteVehicleRouteOtherCostUseCase();
  private findByIdVehicleRouteOtherCostUseCase =
    new FindByIdVehicleRouteOtherCostUseCase();
  private getAllVehicleRouteOtherCostUseCase =
    new GetAllVehicleRouteOtherCostUseCase();
  private updateVehicleRouteOtherCostUseCase =
    new UpdateVehicleRouteOtherCostUseCase();

  create = async (req: Request, res: Response) => {
    const vehicleRouteOtherCost = req.body;
    const newVehicleRouteOtherCost =
      await this.createVehicleRouteOtherCostUseCase.execute(
        vehicleRouteOtherCost
      );
    res.status(201).json(newVehicleRouteOtherCost);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const vehicleRouteOtherCost = req.body;
    await this.updateVehicleRouteOtherCostUseCase.execute(
      id,
      vehicleRouteOtherCost
    );
    res.status(204).send();
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteVehicleRouteOtherCostUseCase.execute(id);
    res.status(204).send();
    return;
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const vehicleRouteOtherCost =
      await this.findByIdVehicleRouteOtherCostUseCase.execute(id);
    res.status(200).json(vehicleRouteOtherCost);
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const vehicleRouteOtherCost =
      await this.getAllVehicleRouteOtherCostUseCase.execute();
    res.status(200).json(vehicleRouteOtherCost);
    return;
  };
}
