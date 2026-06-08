import { Inject, Injectable } from "@nestjs/common"
import { PRODUCT_REPOSITORY_TOKEN, ProductRepositoryPort } from "../ports/product.repository.port"
import { Product } from "src/product/domain/entities/product.entity"

export class CreateProductDto {
  name: string
  price: number
  description: string
}

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject(PRODUCT_REPOSITORY_TOKEN)
    private readonly productRepository: ProductRepositoryPort
  ) {}

  async execute(createDto: CreateProductDto) {
    const productDomain = Product.create(createDto.name, createDto.description, createDto.price)
    const savedProduct = await this.productRepository.save(productDomain)

    return savedProduct
  }
}
