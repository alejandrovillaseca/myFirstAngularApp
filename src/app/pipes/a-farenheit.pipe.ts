import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aFarenheit'
})
export class AFarenheitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      let temperatura = (value * 9/5) + 32
      return temperatura
    }
  }

}
