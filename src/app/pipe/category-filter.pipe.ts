import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe<T extends { category: number }> implements PipeTransform {

  transform(value: T[], catID: number): T[] {
    return value.filter((item: T) => item.category == catID);
  }

}
