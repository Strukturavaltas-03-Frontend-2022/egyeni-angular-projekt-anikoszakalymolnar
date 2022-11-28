import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcdiscont'
})
export class CalcdiscontPipe<T extends { price: number, discont: number }> implements PipeTransform {

  transform(value: T, ...args: unknown[]): number {
    return Math.round(value.price * ((100 - value.discont) / 100));
  }

}
