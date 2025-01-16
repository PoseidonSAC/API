import { Login } from "./login";
import jwt from "jsonwebtoken";
import { UserSignInDto } from "../dtos/user.sigin.dto";
import { ENV } from "../../../core/constants/secret_jwt";

export interface UserRes {
  name: string;
  code: string;
  role: string;
}

export class Session {
  constructor(private readonly userLogin: Login) {
    this.userLogin = userLogin;
  }

  async execute(input: UserSignInDto) {
    const user = await this.userLogin.execute(input);
    const SECRET_JWT = ENV.SECRET_JWT;
    const token = jwt.sign({ ...user }, SECRET_JWT, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign({ ...user }, SECRET_JWT, {
      expiresIn: "1d",
    });

    return { user, token, refreshToken };
  }

  async refreshToken(user: UserRes) {
    const SECRET_JWT = ENV.SECRET_JWT;
    const user_res = { name: user.name, code: user.code, role: user.role };
    const token = jwt.sign({ user_res }, SECRET_JWT, {
      expiresIn: "1h",
    });
    return { user, token };
  }
}
