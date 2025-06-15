import {Component} from '@angular/core';
import {SendButtonComponent} from "../send-button/send-button.component";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    SendButtonComponent
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  public year = new Date().getFullYear()
}
