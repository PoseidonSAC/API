import { TravelRepository } from "../../repositories/travel.repository";
import { TravelCreateDto } from "./../../dtos/travel/create.dto";

export class CreateTravelUseCase {
  private travelRepository = new TravelRepository();

  async execute(travel: TravelCreateDto) {
    return this.travelRepository.create(travel);
  }
}
