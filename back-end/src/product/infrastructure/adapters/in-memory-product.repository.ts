import { ProductRepositoryPort } from "src/product/application/ports/product.repository.port";
import { Product } from "src/product/domain/entities/product.entity";

export class InMemoryProductRepository implements ProductRepositoryPort {
  private readonly products: Map<string, Product> = new Map();

  save(product: Product): Product {
    this.products.set(product.getId().getValue(), product)
    return product
  }

  findByName(name: string) {
    const products = Array.from(this.products.values())
    if (!name || !name.trim().length) return null // this prevents empty query params beign sent from the client
    return products.filter((product) => product.getName().isMatching(name))
  }

  delete(productId: string): void {
    this.products.delete(productId)
  }

  findAll(): Product[] {
    return Array.from(this.products.values())
  }
}
