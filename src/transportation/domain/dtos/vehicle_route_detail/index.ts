export interface VehicleRouteDetailDto {
  id_vehicle_route: number;
  dateInit: Date;
  dateEnd: Date | null;
  taxes_out: number;
  taxes_in: number;
}

export interface VehicleRouteDetailResDto {
  id: number;
  id_vehicle_route: number;
  dateInit: Date;
  dateEnd: Date | null;
  taxes_out: number;
  taxes_in: number;
}
