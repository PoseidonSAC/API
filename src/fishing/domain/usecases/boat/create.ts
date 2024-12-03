import { BoatCreateDto } from "../../dtos/boat.create.dto";
import { BoatGetDto } from "../../dtos/boat.get.dto";
import { BoatRepository } from "../../repositories/boat.repository";
export class CreatBoatUseCase {
  private boatRepository = new BoatRepository();
  async execute(dto: BoatCreateDto): Promise<BoatGetDto> {
    const boat = await this.boatRepository.create(dto);
    return boat;
  }
}
