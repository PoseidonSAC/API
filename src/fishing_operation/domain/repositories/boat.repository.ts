import { db } from "../../../core/config/db";
import { Boat } from "../entities/boat.entity";
import { BoatCreateDto } from "../dtos/boat/create.dto";
import { BoatGetDto } from "../dtos/boat/get.dto";
export class BoatRepository {
  async create(boat: BoatCreateDto): Promise<Boat> {
    const boat_created = await db.boat.create({
      data: {
        name: boat.name,
        title: boat.title,
        capacity: boat.capacity,
      },
    });
    return boat_created;
  }

  async get(): Promise<BoatGetDto[]> {
    const boats = await db.boat.findMany();
    return boats;
  }

  async getById(id: number): Promise<Boat | null> {
    const boat = await db.boat.findUnique({
      where: {
        id,
      },
    });

    return boat;
  }

  async update(id: number, boat: BoatCreateDto): Promise<Boat | null> {
    const boat_updated = await db.boat.update({
      where: {
        id,
      },
      data: {
        name: boat.name,
        title: boat.title,
        capacity: boat.capacity,
      },
    });
    return boat_updated;
  }

  async delete(id: number): Promise<void> {
    await db.boat.delete({
      where: {
        id,
      },
    });
  }
}
