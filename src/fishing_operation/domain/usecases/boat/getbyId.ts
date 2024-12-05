import { BoatRepository } from "../../repositories/boat.repository";
import { Boat } from "./../../entities/boat.entity";
export class GetBoatByIdUseCase {
  private boatRepository = new BoatRepository();
  async execute(id: number) {
    const boat = await this.boatRepository.getById(id);
    return boat;
  }
}
