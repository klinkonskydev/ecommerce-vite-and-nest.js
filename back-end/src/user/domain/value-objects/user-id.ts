import { randomUUID } from "crypto"

export class UserId {
  private readonly value: string

  constructor(id?: string) {
    this.value = id || randomUUID()
  }

  getValue() {
    return this.value
  }

  isEquals(otherValue: UserId) {
    return this.value === otherValue.getValue()
  }
}
