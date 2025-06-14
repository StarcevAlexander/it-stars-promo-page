import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SendButtonComponent} from "../send-button/send-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SendButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public readonly teamMembers = [
    {
      name: 'Анна Иванова',
      role: 'Преподаватель Python',
      photo: 'assets/images/team/anna.jpg'
    },
    {
      name: 'Игорь Петров',
      role: 'Робототехника',
      photo: 'assets/images/team/igor.jpg'
    },
    {
      name: 'Мария Смирнова',
      role: 'Scratch и логика',
      photo: 'assets/images/team/maria.jpg'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Web-разработка',
      photo: 'assets/images/team/dmitry.jpg'
    }
  ];

  public readonly slides = Array.from({length: 10}, (_, i) => ({
    image: `assets/images/slider/slide-${i + 1}.jpg`
  }));
}
