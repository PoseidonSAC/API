import { db } from "../../../core/config/db";
import { ChargerOperation } from "../../domain/entities/charger_operation";
import { ChargerOperationCreateDto } from "../dtos/charger_opetaion/create.dto";

export class ChargerOperationRepository {
  async create(data: ChargerOperationCreateDto): Promise<ChargerOperation> {
    const chargerOperation_created = db.charger_operation.create({
      data: {
        id_vehicle: data.id_vehicle,
        id_person: data.id_person,
        id_travel: data.id_travel,
        footboard: data.footboard,
        helper: data.helper,
        grocer: data.grocer,
        boxes: data.boxes,
        weight: data.weight,
        charger: data.charger,
      },
    });
    return chargerOperation_created;
  }

  async findById(id: number): Promise<ChargerOperation | null> {
    const chargerOperation = db.charger_operation.findUnique({
      where: {
        id: id,
      },
    });
    return chargerOperation;
  }

  async findAll(): Promise<ChargerOperation[]> {
    const chargerOperation = db.charger_operation.findMany();
    return chargerOperation;
  }

  async update(id: number, data: ChargerOperationCreateDto): Promise<void> {
    await db.charger_operation.update({
      where: {
        id: id,
      },
      data: {
        id_vehicle: data.id_vehicle,
        id_person: data.id_person,
        id_travel: data.id_travel,
        footboard: data.footboard,
        helper: data.helper,
        grocer: data.grocer,
        boxes: data.boxes,
        weight: data.weight,
        charger: data.charger,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await db.charger_operation.delete({
      where: {
        id: id,
      },
    });
  }
}
