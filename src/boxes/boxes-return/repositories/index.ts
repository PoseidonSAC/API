import { db } from "../../../core/config/db";
import { BoxesReturnDto, BoxesReturnResDto } from "../dto";

export class BoxesReturnRepository {
  async create(data: BoxesReturnDto): Promise<BoxesReturnResDto> {
    const boxesReturn = await db.boxes_return.create({
      data: {
        id_boxes: data.id_boxes,
        date: new Date(data.date),
        quantity: data.quantity,
      },
    });
    return boxesReturn;
  }

  async findAll(): Promise<BoxesReturnResDto[]> {
    const boxesReturn = await db.boxes_return.findMany();
    return boxesReturn;
  }

  async findById(id: number): Promise<BoxesReturnResDto | null> {
    const boxesReturn = await db.boxes_return.findUnique({
      where: {
        id,
      },
    });
    return boxesReturn;
  }

  async update(id: number, data: BoxesReturnDto): Promise<BoxesReturnResDto> {
    const boxesReturn = await db.boxes_return.update({
      where: {
        id,
      },
      data: {
        id_boxes: data.id_boxes,
        date: new Date(data.date),
        quantity: data.quantity,
      },
    });
    return boxesReturn;
  }

  async delete(id: number): Promise<BoxesReturnResDto> {
    const boxesReturn = await db.boxes_return.delete({
      where: {
        id,
      },
    });
    return boxesReturn;
  }

  async findByBoxes(id_boxes: number): Promise<BoxesReturnResDto[]> {
    const boxesReturn = await db.boxes_return.findMany({
      where: {
        id_boxes,
      },
    });
    return boxesReturn;
  }
}
