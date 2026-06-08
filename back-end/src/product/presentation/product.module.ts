import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { CreateProductUseCase } from "../application/use-cases/create-product.use-case";
import { GetProductsUseCase } from "../application/use-cases/get-products.use-case";
import { PRODUCT_REPOSITORY_TOKEN } from "../application/ports/product.repository.port";
import { InMemoryProductRepository } from "../infrastructure/adapters/in-memory-product.repository";

@Module({
  providers: [
    CreateProductUseCase,
    GetProductsUseCase,
    {
      provide: PRODUCT_REPOSITORY_TOKEN,
      useClass: InMemoryProductRepository
    }

  ],
  controllers: [ProductController]
})

export class ProductModule {}
