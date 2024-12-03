import { BoatGetDto } from "../../dtos/boat.get.dto";
import { BoatRepository } from "../../repositories/boat.repository";
export class GetBoatByIdUseCase {
  private boatRepository = new BoatRepository();
  async execute(id: number): Promise<BoatGetDto> {
    const boat = await this.boatRepository.getById(id);
    return boat;
  }
}
