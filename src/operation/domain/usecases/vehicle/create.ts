import { VehicleRepository } from "../../repositories/vehicle.repository";
import { VehicleCreateDto } from "./../../dtos/vehicle/create.dto";

export class CreateVehicleUseCase {
  private vehicleRepository = new VehicleRepository();

  execute(data: VehicleCreateDto) {
    return this.vehicleRepository.create(data);
  }
}
