import { FishingRepository } from "../../repositories/fishing.repository";

export class GetByIdFishingUseCase {
  private fishingRepository = new FishingRepository();
  async execute(id: number) {
    return this.fishingRepository.findById(id);
  }
}
