import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import axios from 'axios';
import {CommonModule} from '@angular/common';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sign-up-for-lesson-form',
  templateUrl: './sign-up-for-lesson-form.component.html',
  imports: [FormsModule, CommonModule],
  standalone: true,
  styleUrls: ['./sign-up-for-lesson-form.component.scss']
})
export class SignUpForLessonFormComponent {
  public phoneNumber: string = '';
  public agreeChecked: boolean = true;
  public isLoading: boolean = false;
  public formSubmitted: boolean = false;
  private readonly TOKEN = "8129317706:AAFkbQG8gfRyGFwPz4GeDhCP6AkIgQMeL80";
  private readonly CHAT_ID = "-1002286784663";
  private readonly url_api = `https://api.telegram.org/bot${this.TOKEN}/sendMessage`;

  constructor(
    private modalService: NgbModal
  ) {
  }


  public onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.substring(0, 11);
    }

    this.phoneNumber = value;
    input.value = value;
  }

  public onPhoneKeyPress(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.phoneNumber.length >= 11 && this.agreeChecked) {
      this.isLoading = true;

      let cleanPhone = this.phoneNumber.replace(/\D/g, '');
      if (cleanPhone.startsWith('7') && cleanPhone.length === 11) {
        cleanPhone = '8' + cleanPhone.substring(1);
      }

      const data = {
        chat_id: this.CHAT_ID,
        text: `Новая заявка:\n${cleanPhone}`
      };

      axios.post(this.url_api, data)
        .then(() => {
          this.isLoading = false;
          this.formSubmitted = true;
        })
        .catch((error) => {
          console.error('Ошибка:', error);
          this.isLoading = false;
          alert('Ошибка отправки. Попробуйте ещё раз.');
        });
    }
  }

  public resetForm(): void {
    this.modalService.dismissAll();
  }
}
