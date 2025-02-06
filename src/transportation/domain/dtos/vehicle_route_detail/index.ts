export interface VehicleRouteDetailDto {
  id_vehicle_route: number;
  dateInit: Date;
  dateEnd: Date | null;
  taxes_out: number;
  taxes_in: number;
  point_charge: string | null;
  who_destination: string | null;
  destiny: string | null;
}

export interface VehicleRouteDetailResDto {
  id: number;
  id_vehicle_route: number;
  dateInit: Date;
  dateEnd: Date | null;
  point_charge: string | null;
  who_destination: string | null;
  destiny: string | null;
  taxes_out: number;
  taxes_in: number;
}
