import {Component, input} from '@angular/core';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.scss'
})
export class ProgramCardComponent  {
  id = input.required<number>()
}
