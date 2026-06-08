import { Inject, Injectable } from "@nestjs/common";
import { PRODUCT_REPOSITORY_TOKEN, ProductRepositoryPort } from "../ports/product.repository.port";
import { Product } from "src/product/domain/entities/product.entity";

@Injectable()
export class GetProductsUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY_TOKEN)
    private readonly productRepository: ProductRepositoryPort
  ) {}

  async execute() {
    const products = await this.productRepository.findAll()
    if (!products) return [];

    const productsDomain = products.map(product => Product.create(product.getName().getValue(), product.getDescription(), product.getPrice()))
    return productsDomain
  }
}
