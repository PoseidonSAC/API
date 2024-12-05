import {
  CreateOtherCostTravelUseCase,
  DeleteOtherCostTravelUseCase,
  GetAllOtherCostTravelUseCase,
  GetByIdOtherCostTravelUseCase,
  UpdateOtherCostTravelUseCase,
} from "../../domain/usecases/other_cost_travel";
import { Request, Response } from "express";

export class OtherCostTravelController {
  private createOtherCostTravelUseCase = new CreateOtherCostTravelUseCase();
  private deleteOtherCostTravelUseCase = new DeleteOtherCostTravelUseCase();
  private getAllOtherCostTravelUseCase = new GetAllOtherCostTravelUseCase();
  private getByIdOtherCostTravelUseCase = new GetByIdOtherCostTravelUseCase();
  private updateOtherCostTravelUseCase = new UpdateOtherCostTravelUseCase();

  create = async (req: Request, res: Response) => {
    const otherCostTravel = req.body;
    const newOtherCostTravel = await this.createOtherCostTravelUseCase.execute(
      otherCostTravel
    );
    res.status(201).json(newOtherCostTravel);
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteOtherCostTravelUseCase.execute(id);
    res.status(204).send();
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const otherCostTravel = await this.getAllOtherCostTravelUseCase.execute();
    res.status(200).json(otherCostTravel);
    return;
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const otherCostTravel = await this.getByIdOtherCostTravelUseCase.execute(
      id
    );
    res.status(200).json(otherCostTravel);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const otherCostTravel = req.body;
    await this.updateOtherCostTravelUseCase.execute(id, otherCostTravel);
    res.status(204).send();
    return;
  };
}
