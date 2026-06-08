import { ProductId } from "../value-objects/product-id"
import { ProductName } from "../value-objects/product-name"

export class Product {
  constructor(
    private readonly id: ProductId,
    private name: ProductName,
    private price: number,
    private description: string,
    private readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  static create(name: string, description: string, price: number) {
    if (!name || !name.trim().length) {
      throw new Error('Product name is required.')
    }

    if (price < 0) {
      throw new Error('Product price must be greather than zero')
    }

    return new Product(
      new ProductId(),
      new ProductName(name),
      price,
      description,
      new Date(),
      new Date()
    )
  }

  getId(): ProductId {
    return this.id
  }

  getName(): ProductName {
    return this.name
  }

  getPrice(): number {
    return this.price
  }

  getDescription(): string {
    return this.description
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  getUpdatedAt(): Date {
    return this.updatedAt
  }

  updateName(name: string): void {
    if (!name || !name.trim().length) {
      throw new Error('Product name is required.')
    }

    this.name = new ProductName(name)
    this.updatedAt = new Date()
  }

  updatePrice(price: number): void {
    if (price < 0) {
      throw new Error('Product price must be greather than zero')
    }

    this.price = price
    this.updatedAt = new Date()
  }

  updateDescription(description: string): void {
    if (!description || description.trim().length < 50) {
      throw new Error('Product description must be at least 50 character long')
    }

    this.description = description
    this.updatedAt = new Date()
  }
}
