import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topstars'
})
export class TopstarsPipe<T extends { stars: number }> implements PipeTransform {

  transform(value: T[], star: number = 5): T[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return value.filter((item: T) => item.stars >= star);
  }

}
