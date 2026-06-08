import { Module } from '@nestjs/common';
import { UserModule } from './user/presentation/user.module';
import { ProductModule } from './product/presentation/product.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
