import { ChargerOperationRepository } from "./../../repositories/charger_opertaion.repository";

export class FindByChargerOperationTravelIdUseCase {
  private chargerOperationRepository = new ChargerOperationRepository();
  async execute(id: number) {
    const charger_operation =
      await this.chargerOperationRepository.getChargerOperationByTravelId(id);
    console.log("console log from usecase ");
    console.log("charger_operation", charger_operation);
    if (!charger_operation) {
      const charger_operation_created =
        await this.chargerOperationRepository.create(id);
      return charger_operation_created;
    }
    return charger_operation;
  }
}
