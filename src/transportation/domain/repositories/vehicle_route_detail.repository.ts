import { db } from "./../../../core/config/db";

import {
  VehicleRouteDetailDto,
  VehicleRouteDetailResDto,
} from "../dtos/vehicle_route_detail";

export class VehicleRouteDetailRepository {
  async create(data: VehicleRouteDetailDto): Promise<VehicleRouteDetailResDto> {
    const vehicleRouteDetail = await db.vehicle_route_detail.create({
      data: {
        id_vehicle_route: data.id_vehicle_route,
        taxes_in: data.taxes_in,
        taxes_out: data.taxes_out,
        dateEnd: data.dateEnd,
        dateInit: data.dateInit,
        destination: data.destination,
      },
    });
    return vehicleRouteDetail;
  }

  async findAll(): Promise<VehicleRouteDetailResDto[]> {
    const vehicleRouteDetails = await db.vehicle_route_detail.findMany();
    return vehicleRouteDetails;
  }

  async findById(id: number): Promise<VehicleRouteDetailResDto | null> {
    const vehicleRouteDetail = await db.vehicle_route_detail.findUnique({
      where: {
        id,
      },
    });
    return vehicleRouteDetail;
  }

  async update(
    id: number,
    data: VehicleRouteDetailDto
  ): Promise<VehicleRouteDetailResDto> {
    const vehicleRouteDetail = await db.vehicle_route_detail.update({
      where: {
        id,
      },
      data: {
        id_vehicle_route: data.id_vehicle_route,
        taxes_in: data.taxes_in,
        taxes_out: data.taxes_out,
        dateEnd: data.dateEnd ? new Date(data.dateEnd) : null,
        dateInit: new Date(data.dateInit),
        destination: data.destination,
      },
    });
    return vehicleRouteDetail;
  }

  async delete(id: number): Promise<VehicleRouteDetailResDto> {
    const vehicleRouteDetail = await db.vehicle_route_detail.delete({
      where: {
        id,
      },
    });
    return vehicleRouteDetail;
  }

  async findByVehicleRouteId(
    id: number
  ): Promise<VehicleRouteDetailResDto | null> {
    const vehicleRouteDetails = await db.vehicle_route_detail.findFirst({
      where: {
        id_vehicle_route: id,
      },
    });
    return vehicleRouteDetails;
  }
}
