import { VehicleRoute } from "../../entities/vehicle_route";
import { VehicleRouteRepository } from "../../repositories/vehicle_route.repository";

export class GetAllVehicleRouteUseCase {
  private vehicleRouteRepository = new VehicleRouteRepository();
  async execute(): Promise<VehicleRoute[]> {
    const vehicleRoutes = await this.vehicleRouteRepository.findAll();
    return vehicleRoutes;
  }
}
