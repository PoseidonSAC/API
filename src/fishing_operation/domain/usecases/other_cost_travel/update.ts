import { OtherCostTravelRepository } from "../../repositories/other_cost_travel.repository";
import { OtherCostTravelCreateDto } from "./../../dtos/other_cost_travel/create.dto";

export class UpdateOtherCostTravelUseCase {
  private otherCostTravelRepository = new OtherCostTravelRepository();

  async execute(id: number, otherCostTravel: OtherCostTravelCreateDto) {
    return this.otherCostTravelRepository.update(id, otherCostTravel);
  }
}
