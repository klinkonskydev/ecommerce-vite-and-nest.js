export class UserRole {
  private readonly value: string

  constructor(role: string) {
    if (!this.isValid(role)) throw new Error('User role is not valid')
    this.value = role
  }

  getValue() {
    return this.value;
  }

  isValid(role: string) {
    const validRoles = ['Seller', 'Customer']
    return validRoles.includes(role)
  }
}
