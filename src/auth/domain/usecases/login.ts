import { UserSignInDto } from "../dtos/user.sigin.dto";
import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt";
export class Login {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }
  async execute(user: UserSignInDto) {
    const userFound = await this.userRepository.findByEmail(user.email);
    if (!userFound) {
      throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(
      user.password,
      userFound.password
    );
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }
    return {
      name: userFound.name,
      email: userFound.email,
      role: userFound.role.name,
    };
  }
}
