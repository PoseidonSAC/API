import { db } from "../../../core/config/db";
import { Travel } from "../entities/travel.entity";
import { TravelCreateDto } from "../dtos/travel/create.dto";

export class TravelRepository {
  async create(travel: TravelCreateDto): Promise<Travel> {
    const travel_created = await db.travel.create({
      data: {
        oil_charge: travel.oil_charge,
        oil_charger_price: travel.oil_charger_price,
        oil_consume: travel.oil_consume,
        oil_consume_price: travel.oil_consume_price,
        oil_current: travel.oil_current,
        provisions_cost: travel.provisions_cost,
        gas_cylinder_cost: travel.gas_cylinder_cost,
        id_boat: travel.id_boat,
        id_person: travel.id_person,
      },
    });
    return travel_created;
  }
  async findById(id: number): Promise<Travel | null> {
    const travel = await db.travel.findUnique({
      where: {
        id: id,
      },
    });
    return travel;
  }
  async findAll(): Promise<Travel[]> {
    const travel = await db.travel.findMany();
    return travel;
  }

  async update(id: number, travel: TravelCreateDto): Promise<void> {
    await db.travel.update({
      where: {
        id: id,
      },
      data: {
        oil_charge: travel.oil_charge,
        oil_charger_price: travel.oil_charger_price,
        oil_consume: travel.oil_consume,
        oil_consume_price: travel.oil_consume_price,
        oil_current: travel.oil_current,
        provisions_cost: travel.provisions_cost,
        gas_cylinder_cost: travel.gas_cylinder_cost,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await db.travel.delete({
      where: {
        id: id,
      },
    });
  }
}
