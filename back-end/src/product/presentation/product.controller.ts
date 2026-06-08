import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductDto, CreateProductUseCase } from "../application/use-cases/create-product.use-case";
import { Product } from "../domain/entities/product.entity";
import { GetProductsUseCase } from "../application/use-cases/get-products.use-case";

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getProductsUseCase: GetProductsUseCase,
  ) {}

  @Post()
  async createProduct(@Body() createDto: CreateProductDto) {
    const product = await this.createProductUseCase.execute(createDto)
    return this.mapProductToResponse(product)
  }

  @Get()
  async getProducts() {
    const products = await this.getProductsUseCase.execute()
    return products.map(product => this.mapProductToResponse(product))
  }

  private mapProductToResponse(product: Product) {
    return {
      id: product.getId().getValue(),
      name: product.getName().getValue(),
      price: product.getPrice(),
      description: product.getDescription(),
      createdAt: product.getCreatedAt(),
      updatedAt: product.getUpdatedAt()
    }
  }
}
