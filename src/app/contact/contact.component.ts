import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contacts = [
    {
      city: 'Москва',
      address: 'ул. Примерная, 123, офис 45',
      phone: '+7 (495) 123-45-67',
      telegram: '@moskow_contact',
      email: 'moskow@example.com',
      coords: [55.7558, 37.6173]
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский пр., 456, лит. А',
      phone: '+7 (812) 987-65-43',
      telegram: '@spb_contact',
      email: 'spb@example.com',
      coords: [59.9343, 30.3351]
    }
  ];

  activeLocation = this.contacts[0];
}
