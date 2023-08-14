import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Personalizados Impressos': return 'edit';
      case 'Bordado Manual': return 'gesture';
      case 'Costura Personalizada' : return'cut';
      case 'Cosméticos' : return 'girl'
    }
    return 'face';
  }

}
  