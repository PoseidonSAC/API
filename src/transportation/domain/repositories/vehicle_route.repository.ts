import { VehicleRoute } from "./../entities/vehicle_route";
import { CreateVehicleRouteDto } from "./../dtos/vehicle_route/create.dto";
import { db } from "../../../core/config/db";

export class VehicleRouteRepository {
  async create(data: CreateVehicleRouteDto): Promise<VehicleRoute> {
    const vehicleRoute = await db.vehicle_route.create({
      data: {
        state: data.state,
        id_charge_operation: data.id_charge_operation,
      },
    });
    return vehicleRoute;
  }

  async findAll(): Promise<VehicleRoute[]> {
    const vehicleRoutes = await db.vehicle_route.findMany();
    return vehicleRoutes;
  }

  async findById(id: number): Promise<VehicleRoute | null> {
    const vehicleRoute = await db.vehicle_route.findUnique({
      where: {
        id,
      },
    });
    return vehicleRoute;
  }

  async update(id: number, data: CreateVehicleRouteDto): Promise<VehicleRoute> {
    const vehicleRoute = await db.vehicle_route.update({
      where: {
        id,
      },
      data: {
        state: data.state,
        id_charge_operation: data.id_charge_operation,
      },
    });
    return vehicleRoute;
  }

  async delete(id: number): Promise<VehicleRoute> {
    const vehicleRoute = await db.vehicle_route.delete({
      where: {
        id,
      },
    });
    return vehicleRoute;
  }
}
