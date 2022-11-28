import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceorder'
})
export class PriceorderPipe<T extends { price: number, discont: number }> implements PipeTransform {

  transform(value: T[], order: boolean = true): T[] {
    if (!Array.isArray(value)) {
      return value;
    }

    if (order)
      return value.sort((a: T, b: T) => this.discont(a) - this.discont(b));
    else
      return value.sort((a: T, b: T) => this.discont(b) - this.discont(a));
  }

  discont(value: T): number {
    return value.price * ((100 - value.discont) / 100);
  }

}

