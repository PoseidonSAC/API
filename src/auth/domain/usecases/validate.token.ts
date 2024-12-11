import jwt from "jsonwebtoken";
import { ENV } from "../../../core/constants/secret_jwt";

export interface UserRes {
  name: string;
  code: string;
  role: string;
}

export interface IValidateTokenResponse {
  isValid: boolean;
  user: UserRes | null;
}

export class ValidateTokenUseCase {
  async execute(token: string): Promise<IValidateTokenResponse> {
    try {
      const user = jwt.verify(token, ENV.SECRET_JWT);
      return { isValid: true, user: user as UserRes };
    } catch (error) {
      return { isValid: false, user: null };
    }
  }
}
