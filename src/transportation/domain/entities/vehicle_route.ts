export interface VehicleRoute {
  id: number;
  state: string;
  createdAt: Date;
  updatedAt: Date;
  id_vehicle: number;
}

export interface VehicleName {
  name: string;
}

export interface VehicleRouteWithVehicle extends VehicleRoute {
  vehicle: VehicleName;
}
