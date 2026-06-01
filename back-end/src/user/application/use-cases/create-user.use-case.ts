import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY_TOKEN, UserRepositoryPort } from "../ports/user.repository.port";
import { User } from "src/user/domain/entities/user.entity";

export class CreateUserDto {
  name: string
  email: string
  role: string
}

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: UserRepositoryPort
  ) {}

  async execute(createDto: CreateUserDto) {
    const existingUser = await this.userRepository.findByEmail(createDto.email)

    if (existingUser) throw new Error('User with this email already exists.')

    const user = User.create(createDto.name, createDto.email, createDto.role);
    const savedUser = await this.userRepository.save(user)

    return savedUser;
  }
}
