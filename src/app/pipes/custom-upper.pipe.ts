import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customText',
  standalone: true
})
export class CustomTextPipe implements PipeTransform {
  transform(value: string): string {
    return value + ' 🚀';
  }
}
