import {
  GetBoatByIdUseCase,
  DeleteBoatUseCase,
  CreatBoatUseCase,
  GetAllBoatUseCase,
  UpdateBoatUseCase,
} from "../../domain/usecases/boat";

import { Request, Response } from "express";
import zod from "zod";

class BoatValidation {
  static boatSchema = zod.object({
    name: zod.string().min(3).max(255),
    title: zod.string().min(3).max(255),
    capacity: zod.number(),
  });

  static validateCreate(data: any) {
    return this.boatSchema.safeParse(data);
  }
}

export class BoatController {
  private getBoatByIdUseCase = new GetBoatByIdUseCase();
  private deleteBoatUseCase = new DeleteBoatUseCase();
  private createBoatUseCase = new CreatBoatUseCase();
  private getAllBoatUseCase = new GetAllBoatUseCase();
  private updateBoatUseCase = new UpdateBoatUseCase();
  getbyId = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const boat = await this.getBoatByIdUseCase.execute(id);
    res.status(200).json(boat);
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteBoatUseCase.execute(id);
    res.status(204).send();
    return;
  };

  create = async (req: Request, res: Response) => {
    const boat = req.body;
    const validatedBoat = BoatValidation.validateCreate(boat);
    if (!validatedBoat.success) {
      res.status(400).json(validatedBoat.error);
      return;
    }
    const newBoat = await this.createBoatUseCase.execute(boat);
    res.status(201).json(newBoat);
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const boats = await this.getAllBoatUseCase.execute();
    res.status(200).json(boats);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const boat = req.body;
    const validatedBoat = BoatValidation.validateCreate(boat);
    if (!validatedBoat.success) {
      res.status(400).json(validatedBoat.error);
      return;
    }
    const updatedBoat = await this.updateBoatUseCase.execute(id, boat);
    res.status(202).json(updatedBoat);
    return;
  };
}
