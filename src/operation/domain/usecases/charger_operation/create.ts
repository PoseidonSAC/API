import { ChargerOperationRepository } from "../../repositories/charger_opertaion.repository";
import { ChargerOperationCreateDto } from "../../dtos/charger_opetaion/create.dto";
import { ChargerOperation } from "../../entities/charger_operation";
export class CreateChargerOperationUseCase {
  private chargerOperationRepository = new ChargerOperationRepository();
  execute(data: ChargerOperationCreateDto): Promise<ChargerOperation> {
    return this.chargerOperationRepository.create(data);
  }
}
