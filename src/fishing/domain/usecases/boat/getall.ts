import { BoatRepository } from "../../repositories/boat.repository";
import { BoatGetDto } from "../../dtos/boat.get.dto";
export class GetAllBoatUseCase {
  private boatRepository = new BoatRepository();
  async execute(): Promise<BoatGetDto[]> {
    const boats = await this.boatRepository.get();
    return boats;
  }
}
