import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso : string [] = ['Java', 'JavaScript', 'PHP', 'Ruby', 'C#'];


  constructor() { }

}
