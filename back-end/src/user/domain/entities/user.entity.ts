import { UserEmail } from "../value-objects/user-email";
import { UserId } from "../value-objects/user-id";
import { UserRole } from "../value-objects/user-role";

export class User {
  constructor(
    private readonly id: UserId,
    private name: string,
    private email: UserEmail,
    private readonly createdAt: Date,
    private updatedAt: Date,
    private role: UserRole
  ) {}

  static create(name: string, email: string, role: string) {
    if (!name || name.trim().length < 3) {
      throw new Error('Name must be at least 3 character long');
    }

    return new User(
      new UserId(),
      name,
      new UserEmail(email),
      new Date(),
      new Date(),
      new UserRole(role)
    )
  }

    getId(): UserId {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): UserEmail {
    return this.email;
  }

  getRole(): UserRole {
    return this.role;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  updateName(name: string) {
    if (!name || name.trim().length < 3) {
      throw new Error('Name must be at least 3 character long');
    }

    this.name = name
    this.updatedAt = new Date()
  }

  updateEmail(email: string) {
    this.email = new UserEmail(email)
    this.updatedAt = new Date()
  }

  getAccountAge(): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - this.createdAt.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
