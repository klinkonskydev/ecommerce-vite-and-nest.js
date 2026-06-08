import { Product } from "src/product/domain/entities/product.entity";

export interface ProductRepositoryPort {
  save(product: Product): Promise<Product> | Product
  findByName(productName: string): Promise<Product[] | null> | Product[] | null
  findAll(): Promise<Product[]> | Product[]
  delete(productId: string): void
}

export const PRODUCT_REPOSITORY_TOKEN = Symbol('PRODUCT_REPOSITORY_TOKEN')
