import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto, CreateUserUseCase } from "../application/use-cases/create-user.use-case";
import { User } from "../domain/entities/user.entity";
import { GetUsersUseCase } from "../application/use-cases/get-users.use-case";

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
  ) {}

  @Post() 
  async createUser(@Body() createDto: CreateUserDto) {
    const user = await this.createUserUseCase.execute(createDto)
    return this.mapUserToResponse(user)
  }

  @Get()
  async getUsers() {
    const users = await this.getUsersUseCase.execute();
    return users.map(user => this.mapUserToResponse(user))
  }

  private mapUserToResponse(user: User) {
    return {
      id: user.getId().getValue(),
      name: user.getName(),
      email: user.getEmail().getValue(),
      role: user.getRole().getValue(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
      accountAge: user.getAccountAge(),
    }
  }
}
