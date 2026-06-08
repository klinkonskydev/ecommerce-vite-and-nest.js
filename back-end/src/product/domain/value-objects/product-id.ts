import { randomUUID } from "crypto";

export class ProductId {
  private readonly value: string;
  
  constructor(id?: string) {
    this.value = id || randomUUID()
  }

  getValue() {
    return this.value
  }

  isEquals(product: ProductId) {
    return this.value === product.getValue()
  }
}
