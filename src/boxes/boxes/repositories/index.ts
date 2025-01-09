import { db } from "../../../core/config/db";

import { BoxesDto, BoxesResDto } from "../dto";

export class BoxesRepository {
  async create(data: BoxesDto): Promise<BoxesResDto> {
    const boxes = await db.boxes.create({
      data: {
        color: data.color,
        name: data.name,
        quantity: data.quantity,
        id_control_boxes: data.id_control_boxes,
        reported_by: data.reported_by,
        hasLiquid: data.hasLiquid,
        createdAt: new Date(data.createdAt),
      },
    });
    return boxes;
  }

  async findAll(): Promise<BoxesResDto[]> {
    const boxes = await db.boxes.findMany();
    return boxes;
  }

  async findById(id: number): Promise<BoxesResDto | null> {
    const boxes = await db.boxes.findUnique({
      where: {
        id,
      },
    });
    return boxes;
  }

  async update(id: number, data: BoxesDto): Promise<BoxesResDto> {
    const boxes = await db.boxes.update({
      where: {
        id,
      },
      data: {
        color: data.color,
        name: data.name,
        quantity: data.quantity,
        id_control_boxes: data.id_control_boxes,
        reported_by: data.reported_by,
        hasLiquid: data.hasLiquid,
        createdAt: new Date(data.createdAt),
      },
    });
    return boxes;
  }

  async delete(id: number): Promise<BoxesResDto> {
    const boxes = await db.boxes.delete({
      where: {
        id,
      },
    });
    return boxes;
  }

  async findByControlBoxes(id_control_boxes: number): Promise<BoxesResDto[]> {
    const boxes = await db.boxes.findMany({
      where: {
        id_control_boxes,
      },
    });
    return boxes;
  }
}
