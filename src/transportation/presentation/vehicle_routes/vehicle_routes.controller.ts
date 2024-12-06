import { Response, Request } from "express";

import {
  CreateVehicleRoutesUseCase,
  DeleteVehicleRoutesUseCase,
  FindByIdVehicleRoutesUseCase,
  GetAllVehicleRoutesUseCase,
  UpdateVehicleRoutesUseCase,
} from "../../domain/usecases/vehicle_routes";

export class VehicleRoutesController {
  private createVehicleRoutesUseCase = new CreateVehicleRoutesUseCase();
  private deleteVehicleRoutesUseCase = new DeleteVehicleRoutesUseCase();
  private findByIdVehicleRoutesUseCase = new FindByIdVehicleRoutesUseCase();
  private getAllVehicleRoutesUseCase = new GetAllVehicleRoutesUseCase();
  private updateVehicleRoutesUseCase = new UpdateVehicleRoutesUseCase();

  create = async (req: Request, res: Response) => {
    const vehicleRoutes = req.body;
    const newVehicleRoutes = await this.createVehicleRoutesUseCase.execute(
      vehicleRoutes
    );
    res.status(201).json(newVehicleRoutes);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const vehicleRoutes = req.body;
    await this.updateVehicleRoutesUseCase.execute(id, vehicleRoutes);
    res.status(204).send();
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteVehicleRoutesUseCase.execute(id);
    res.status(204).send();
    return;
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const vehicleRoutes = await this.findByIdVehicleRoutesUseCase.execute(id);
    res.status(200).json(vehicleRoutes);
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const vehicleRoutes = await this.getAllVehicleRoutesUseCase.execute();
    res.status(200).json(vehicleRoutes);
    return;
  };
}
