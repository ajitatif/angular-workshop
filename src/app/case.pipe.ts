import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	if (!args || args === 'lower') {
  	  return value.toLowerCase();
  	} else if (args === 'upper') {
  	  return value.toUpperCase();
  	}

    return null;
  }

}
