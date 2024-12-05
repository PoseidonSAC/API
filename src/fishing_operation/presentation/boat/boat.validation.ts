import zod from "zod";

export class BoatValidation {
  static boatSchema = zod.object({
    name: zod.string().min(3).max(255),
    title: zod.string().min(3).max(255),
    capacity: zod.number(),
  });

  static validateCreate(data: any) {
    return this.boatSchema.safeParse(data);
  }
}
