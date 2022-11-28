import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe<T extends { category: number }> implements PipeTransform {

  transform(value: T[], catID: number): T[] {
    if (!Array.isArray(value) || !catID) {
      return value;
    }

    return value.filter((item: T) => item.category == catID);
  }

}
