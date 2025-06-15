import {Component} from '@angular/core';
import {SignUpForLessonFormComponent} from "../sign-up-for-lesson-form";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-send-button',
  standalone: true,
  templateUrl: './send-button.component.html',
  styleUrl: './send-button.component.scss'
})
export class SendButtonComponent {
  constructor(private modalService: NgbModal) {
  }

  public openSignUpForm(): void {
    this.modalService.open(SignUpForLessonFormComponent, {
      size: 'lg',
      centered: true,
      backdrop: true,
    });
  }
}
