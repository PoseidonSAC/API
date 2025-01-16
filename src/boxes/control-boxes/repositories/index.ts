import { db } from "../../../core/config/db";
import { ControlBoxesDto, ControlBoxesResDto } from "../dto";

export class ControlBoxesRepository {
  async create(data: ControlBoxesDto): Promise<ControlBoxesResDto> {
    const controlBoxes = await db.control_boxes.create({
      data: {
        code: data.code,
        date_arrive: data.date_arrive,
        place: data.place,
        concluded: false,
      },
    });
    return controlBoxes;
  }

  async findAll(): Promise<ControlBoxesResDto[]> {
    const controlBoxes = await db.control_boxes.findMany({
      orderBy: {
        date_arrive: "desc",
      },
    });
    return controlBoxes;
  }

  async findById(id: number): Promise<ControlBoxesResDto | null> {
    const controlBoxes = await db.control_boxes.findUnique({
      where: {
        id,
      },
    });
    return controlBoxes;
  }

  async update(id: number, data: ControlBoxesResDto): Promise<ControlBoxesDto> {
    const controlBoxes = await db.control_boxes.update({
      where: {
        id,
      },
      data: {
        code: data.code,
        date_arrive: data.date_arrive,
        place: data.place,
        concluded: data.concluded,
      },
    });
    return controlBoxes;
  }

  async delete(id: number): Promise<ControlBoxesDto> {
    const controlBoxes = await db.control_boxes.delete({
      where: {
        id,
      },
    });
    return controlBoxes;
  }
}
