import { Module } from "@nestjs/common";
import { CreateUserUseCase } from "../application/use-cases/create-user.use-case";
import { USER_REPOSITORY_TOKEN } from "../application/ports/user.repository.port";
import { InMemoryUserRepository } from "../infrastructure/adapters/in-memory-user.repository";
import { GetUsersUseCase } from "../application/use-cases/get-users.use-case";
import { UserController } from "./user.controller";

@Module({
  providers: [
    CreateUserUseCase,
    GetUsersUseCase,
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: InMemoryUserRepository
    }
  ],
  controllers: [UserController]
})

export class UserModule {}
