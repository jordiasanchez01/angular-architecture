import { Observable } from 'rxjs';
import { UseCase } from 'src/core/core-interface/use-case';
import { Injectable } from '@angular/core';
import { ProductEntity } from '@models/product/product-entity';
import { ProductRepository } from '../../repositories/product/product.repository';

@Injectable()
export class GetProductUseCase
  implements UseCase<string, ProductEntity>
{
  constructor(private productRepository: ProductRepository) {}

  execute(params: string): Observable<ProductEntity> {
    return this.productRepository.getProduct(params)
  }
}
