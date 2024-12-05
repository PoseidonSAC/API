import { Response, Request } from "express";
import {
  CreateChargerOperationUseCase,
  UpdateChargerOperationUseCase,
  DeleteChargerOperationUseCase,
  FindByChargerOperationUseCase,
  GetAllChargerOperationUseCase,
} from "../../domain/usecases/charger_operation";

export class ChargerOperationController {
  private createChargerOperationUseCase = new CreateChargerOperationUseCase();
  private updateChargerOperationUseCase = new UpdateChargerOperationUseCase();
  private deleteChargerOperationUseCase = new DeleteChargerOperationUseCase();
  private findByChargerOperationUseCase = new FindByChargerOperationUseCase();
  private getAllChargerOperationUseCase = new GetAllChargerOperationUseCase();

  create = async (req: Request, res: Response) => {
    const chargerOperation = req.body;
    const newChargerOperation =
      await this.createChargerOperationUseCase.execute(chargerOperation);
    res.status(201).json(newChargerOperation);
    return;
  };

  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const chargerOperation = req.body;
    await this.updateChargerOperationUseCase.execute(id, chargerOperation);
    res.status(204).send();
    return;
  };

  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.deleteChargerOperationUseCase.execute(id);
    res.status(204).send();
    return;
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const chargerOperation = await this.findByChargerOperationUseCase.execute(
      id
    );
    res.status(200).json(chargerOperation);
    return;
  };

  getAll = async (req: Request, res: Response) => {
    const chargerOperation = await this.getAllChargerOperationUseCase.execute();
    res.status(200).json(chargerOperation);
    return;
  };
}
