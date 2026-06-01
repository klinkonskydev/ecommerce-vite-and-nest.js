export class UserEmail {
  private readonly value: string

  constructor(email: string) {
    if (!this.isValid(email)) throw new Error('User email is not valid.')
    this.value = email
  }

  getValue() {
    return this.value;
  }

  isValid(email: string) {
    return email.includes('@')
  }

  isEquals(email: UserEmail) {
    return this.value === email.value;
  }
}
