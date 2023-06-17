import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeConversion'
})
export class TypeConversionPipe implements PipeTransform {
  transform(value: any): any {
    if (/^-?\d+(\.\d+)?$/.test(value)) {
      // Number
      return parseFloat(value);
    } else if (value === 'true' || value === 'false') {
      // Boolean
      return value === 'true';
    } else {
      // String
      return value;
    }
  }
}
