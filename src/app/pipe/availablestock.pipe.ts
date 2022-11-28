import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availablestock'
})
export class AvailablestockPipe<T extends { stock: number }> implements PipeTransform {

  transform(value: T[], on: boolean = true): T[] {
    if (!Array.isArray(value)) {
      return value;
    }

    if (on)
      return value.filter((item: T) => item.stock > 0);
    else
      return value;
  }

}
