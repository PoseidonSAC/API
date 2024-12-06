import { VehicleRoute } from "../../entities/vehicle_route";
import { CreateVehicleRouteDto } from "../../dtos/vehicle_route/create.dto";
import { VehicleRouteRepository } from "../../repositories/vehicle_route.repository";

export class CreateVehicleRouteUseCase {
  private vehicleRouteRepository = new VehicleRouteRepository();
  async execute(data: CreateVehicleRouteDto): Promise<VehicleRoute> {
    const vehicleRoute = await this.vehicleRouteRepository.create(data);
    return vehicleRoute;
  }
}
