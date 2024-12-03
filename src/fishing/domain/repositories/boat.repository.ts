import { db } from "../../../core/config/db";
import { Boat } from "../entities/boat.entity";
import { BoatCreateDto } from "../dtos/boat.create.dto";
import { BoatGetDto } from "../dtos/boat.get.dto";
import { BoatCapacityDto } from "../dtos/boat.capacity.dto";
export class BoatRepository {
  async create(boat: BoatCreateDto): Promise<Boat> {
    const boat_created = await db.boat.create({
      data: {
        name: boat.name,
        title: boat.title,
        capacity: boat.capacity,
      },
    });
    return {
      id: boat_created.id,
      name: boat_created.name,
      title: boat_created.title,
      capacity: boat_created.capacity,
    };
  }

  async get(): Promise<BoatGetDto[]> {
    const boats = await db.boat.findMany();
    return boats.map((boat) => ({
      id: boat.id,
      name: boat.name,
      title: boat.title,
      capacity: boat.capacity,
    }));
  }

  async getById(id: number): Promise<BoatGetDto> {
    const boat = await db.boat.findUnique({
      where: {
        id,
      },
    });

    if (!boat) {
      throw new Error("Boat not found");
    }
    return {
      id: boat.id,
      name: boat.name,
      title: boat.title,
      capacity: boat.capacity,
    };
  }

  async update(id: number, boat: BoatCreateDto): Promise<BoatGetDto> {
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
    return {
      id: boat_updated.id,
      name: boat_updated.name,
      title: boat_updated.title,
      capacity: boat_updated.capacity,
    };
  }

  async delete(id: number): Promise<void> {
    await db.boat.delete({
      where: {
        id,
      },
    });
  }

  async getCapacity(id: number): Promise<BoatCapacityDto> {
    const boat = await db.boat.findUnique({
      where: {
        id,
      },
      select: {
        capacity: true,
      },
    });

    if (!boat) {
      throw new Error("Boat not found");
    }

    return boat;
  }
}
