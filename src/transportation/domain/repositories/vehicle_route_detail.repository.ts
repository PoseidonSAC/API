import { db } from "./../../../core/config/db";

import {
  VehicleRouteDetailDto,
  VehicleRouteDetailResDto,
} from "../dtos/vehicle_route_detail";

export class VehicleRouteDetailRepository {
  async create(data: VehicleRouteDetailDto) {
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

  async findAll() {
    const vehicleRouteDetails = await db.vehicle_route_detail.findMany();
    return vehicleRouteDetails;
  }

  async findById(id: number) {
    const vehicleRouteDetail = await db.vehicle_route_detail.findUnique({
      where: {
        id,
      },
    });
    return vehicleRouteDetail;
  }

  async update(id: number, data: VehicleRouteDetailDto) {
    const vehicleRouteDetail = await db.vehicle_route_detail.update({
      where: {
        id,
      },
      data: {
        id_vehicle_route: data.id_vehicle_route,
        taxes_in: data.taxes_in,
        taxes_out: data.taxes_out,
        dateEnd: data.dateEnd ? data.dateEnd : null,
        dateInit: data.dateInit,
        destination: data.destination,
      },
    });
    return vehicleRouteDetail;
  }

  async delete(id: number) {
    const vehicleRouteDetail = await db.vehicle_route_detail.delete({
      where: {
        id,
      },
    });
    return vehicleRouteDetail;
  }

  async findByVehicleRouteId(id: number) {
    const vehicleRouteDetails = await db.vehicle_route_detail.findFirst({
      where: {
        id_vehicle_route: id,
      },
    });
    return vehicleRouteDetails;
  }
}
