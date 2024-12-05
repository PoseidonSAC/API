import { BoatGetDto } from "../../dtos/boat/get.dto";
import { BoatRepository } from "../../repositories/boat.repository";
export class UpdateBoatUseCase {
  private boatRepository = new BoatRepository();
  async execute(id: number, dto: BoatGetDto): Promise<BoatGetDto> {
    const boat = await this.boatRepository.update(id, dto);
    return boat;
  }
}
