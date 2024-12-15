import { TravelRepository } from "../../repositories/travel.repository";

import { TravelCreateDto } from "./../../dtos/travel/create.dto";

export class CreateTravelUseCase {
  private travelRepository = new TravelRepository();

  async execute(travel: TravelCreateDto) {
    if (travel.code.length === 0) {
      throw new Error("Code is required");
    }
    return this.travelRepository.create(travel);
  }
}
