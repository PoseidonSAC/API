import { UserRegisterDto } from "../dtos/user.register.dto";
import { UserRepository } from "../repositories/user.repository";
import bycrypt from "bcrypt";
import { UserSessionDto } from "../dtos/user.session.dto";
import { RoleRepository } from "./../repositories/role.respository";

export class Register {
  private userRepository: UserRepository;
  private RoleRepository: RoleRepository;
  constructor() {
    this.userRepository = new UserRepository();
    this.RoleRepository = new RoleRepository();
  }
  async execute(dto: UserRegisterDto): Promise<UserSessionDto> {
    const userFound = await this.userRepository.findByEmail(dto.email);
    if (userFound) {
      throw new Error("User already exists");
    }
    if (dto.password !== dto.passwordConfirmation) {
      throw new Error("Passwords do not match");
    }
    const passwordHash = await bycrypt.hash(dto.password, 10);
    const role = await this.RoleRepository.findByName("User");
    if (!role) {
      throw new Error("Role not found");
    }

    const user = await this.userRepository.save({
      id: 0,
      name: dto.name,
      email: dto.email,
      password: passwordHash,
      id_role: role.id,
    });

    return {
      name: user.name,
      email: user.email,
    };
  }
}