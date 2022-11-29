import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(value: T[], phrase: string = ""): T[] {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }
    phrase = phrase.toLowerCase();

    return value.filter(
      item => Object.values(item).join(' ').toLowerCase().includes(phrase)
    );
  }

}
