import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quirepapa'
})
export class QuirepapaPipe implements PipeTransform {

  transform(value1: any): any {
     return value1.filter((value1:  any , i2: any, arr2: any[]) => arr2.findIndex(data2 => data2.biography.alignment === value1.biography.alignment));
  }

}
