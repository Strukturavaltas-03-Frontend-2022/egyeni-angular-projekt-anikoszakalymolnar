import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isnewlego'
})
export class IsnewlegoPipe<T extends { new: boolean }> implements PipeTransform {

  transform(value: T[], news: boolean = true): T[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return value.filter((item: T) => item.new == news);

  }
}
