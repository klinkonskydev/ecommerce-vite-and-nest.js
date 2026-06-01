import { UserRepositoryPort } from "src/user/application/ports/user.repository.port";
import { User } from "src/user/domain/entities/user.entity";

export class InMemoryUserRepository implements UserRepositoryPort {
  private readonly users: Map<string, User> = new Map();

  save(user: User): User {
    this.users.set(user.getId().getValue(), user);
    return user
  }

  findById(id: string): User | null {
    return this.users.get(id) || null
  }

  findByEmail(email: string): User | null {
    const users = Array.from(this.users.values())
    return users.find(user => user.getEmail().getValue() === email) || null
  }

  findAll(): User[] {
    return Array.from(this.users.values())
  }

  delete(id: string): void {
    this.users.delete(id)
  }
}
