export interface VehicleRouteDetail {
  id: number;
  id_vehicle_route: number;
  dateInit: string;
  dateEnd: string;
  taxes_out: number;
  taxes_in: number;
  destination: string | null;
  createdAt: Date;
  updatedAt: Date;
}
