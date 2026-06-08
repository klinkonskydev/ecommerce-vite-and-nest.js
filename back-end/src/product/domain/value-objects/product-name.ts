export class ProductName {
  private readonly value: string

  constructor(name: string) {
    this.value = name
  }

  getValue(): string {
    return this.value
  }

  isMatching(name: string) {
    return this.value.match(name)
  }
}
