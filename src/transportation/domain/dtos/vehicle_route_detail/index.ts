export interface VehicleRouteDetailDto {
  id_vehicle_route: number;
  dateInit: Date;
  dateEnd: Date | null;
  taxes_out: number;
  taxes_in: number;
  destination: string | null;
}

export interface VehicleRouteDetailResDto {
  id: number;
  id_vehicle_route: number;
  dateInit: Date;
  dateEnd: Date | null;
  destination: string | null;
  taxes_out: number;
  taxes_in: number;
}
