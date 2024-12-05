import { VehicleRepository } from "../../repositories/vehicle.repository";
import { VehicleCreateDto } from "./../../dtos/vehicle/create.dto";

export class UpdateVehicleUseCase {
  private vehicleRepository = new VehicleRepository();
  async execute(id: number, data: VehicleCreateDto) {
    return this.vehicleRepository.update(id, data);
  }
}
