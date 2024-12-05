import { BoatRepository } from "../../repositories/boat.repository";
export class DeleteBoatUseCase {
  private boatRepository = new BoatRepository();
  async execute(id: number): Promise<void> {
    await this.boatRepository.delete(id);
  }
}
