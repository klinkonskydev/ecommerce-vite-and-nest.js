import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY_TOKEN, UserRepositoryPort } from "../ports/user.repository.port";
import { User } from "src/user/domain/entities/user.entity";

@Injectable()
export class GetUsersUseCase {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: UserRepositoryPort
  ) {}

  async execute() {
    const users = await this.userRepository.findAll();
    if (!users) return []

    const usersDomain = users.map(user => User.create(user.getName(), user.getEmail().getValue(), user.getRole().getValue()))
    return usersDomain
  }
}
