import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

  //valorEntrada, args, :lo que retorna

  transform(value:string):string{
    let encabezado = "Album"+value;
    return encabezado;
  }

}
