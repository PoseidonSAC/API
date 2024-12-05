import { Request, Response } from "express";
import {
  CreateFishingUseCase,
  DeleteFishingUseCase,
  GetAllFishingUseCase,
  GetByIdFishingUseCase,
  UpdateFishingUseCase,
} from "../../domain//usecases/fishing";

export class FishingController {
  private createFishingUseCase = new CreateFishingUseCase();
  private deleteFishingUseCase = new DeleteFishingUseCase();
  private getAllFishingUseCase = new GetAllFishingUseCase();
  private getByIdFishingUseCase = new GetByIdFishingUseCase();
  private updateFishingUseCase = new UpdateFishingUseCase();

  create = async (req: Request, res: Response) => {
    const fishing = req.body;
    const newFishing = await this.createFishingUseCase.execute(fishing);
    res.status(201).json(newFishing);
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteFishingUseCase.execute(id);
    res.status(204).send();
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const fishing = await this.getAllFishingUseCase.execute();
    res.status(200).json(fishing);
    return;
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const fishing = await this.getByIdFishingUseCase.execute(id);
    res.status(200).json(fishing);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const fishing = req.body;
    await this.updateFishingUseCase.execute(id, fishing);
    res.status(204).send();
    return;
  };
}
