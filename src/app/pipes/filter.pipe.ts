import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filterText: string): Todo[] {
    filterText = filterText ? filterText.toLowerCase() : '';

    return filterText
      ? value.filter((todo: Todo) => todo.title.toLowerCase().indexOf(filterText) !== -1)
      : value;
  }

}
