import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe<T extends {}> implements PipeTransform {

  transform(value: T[], ...args: unknown[]): T[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return value.sort(() => 0.5 - Math.random());
  }

}
