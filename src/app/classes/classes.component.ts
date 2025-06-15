import {Component} from '@angular/core';
import {SendButtonComponent} from "../send-button/send-button.component";

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [
    SendButtonComponent
  ],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  public freeSpots = 5
}
