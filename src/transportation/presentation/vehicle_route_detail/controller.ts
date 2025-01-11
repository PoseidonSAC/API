import { VehicleRouteDetailRepository } from "../../domain/repositories/vehicle_route_detail.repository";

import { Request, Response } from "express";

export class VehicleRouteDetailController {
  private vehicleRouteDetailRepository = new VehicleRouteDetailRepository();

  create = async (req: Request, res: Response) => {
    try {
      const vehicleRouteDetail = req.body;
      const newVehicleRouteDetail =
        await this.vehicleRouteDetailRepository.create(vehicleRouteDetail);
      res.status(201).json(newVehicleRouteDetail);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        console.log(error);
        return;
      }
      res.status(400).json({ message: "Unexpected error." });
      return;
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const vehicleRouteDetail = req.body;
      await this.vehicleRouteDetailRepository.update(id, vehicleRouteDetail);
      res.status(204).send();
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        console.log(error);
        return;
      }
      res.status(400).json({ message: "Unexpected error." });
      return;
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      await this.vehicleRouteDetailRepository.delete(id);
      res.status(204).send();
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        console.log(error);
        return;
      }
      res.status(400).json({ message: "Unexpected error." });
      return;
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const vehicleRouteDetails =
        await this.vehicleRouteDetailRepository.findAll();
      res.status(200).json(vehicleRouteDetails);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        console.log(error);
        return;
      }
      res.status(400).json({ message: "Unexpected error." });
      return;
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const vehicleRouteDetail =
        await this.vehicleRouteDetailRepository.findById(id);
      res.status(200).json(vehicleRouteDetail);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        console.log(error);
        return;
      }
      res.status(400).json({ message: "Unexpected error." });
      return;
    }
  };

  getByVehicleRouteId = async (req: Request, res: Response) => {
    try {
      const vehicleRouteId = Number(req.params.id);
      const vehicleRouteDetail =
        await this.vehicleRouteDetailRepository.findByVehicleRouteId(
          vehicleRouteId
        );
      if (!vehicleRouteDetail) {
        const vehicleRouteDetailCreated =
          await this.vehicleRouteDetailRepository.create({
            id_vehicle_route: vehicleRouteId,
            taxes_in: 0,
            taxes_out: 0,
            dateInit: new Date(),
            dateEnd: null,
          });

        res.status(200).json(vehicleRouteDetailCreated);
        return;
      }
      res.status(200).json(vehicleRouteDetail);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        console.log(error);
        return;
      }
      res.status(400).json({ message: "Unexpected error." });
      return;
    }
  };
}
