import {Component, inject, input, Signal} from '@angular/core';
import {ProgramService} from "../program.service";
import {LearningModule} from "../program.model";
import {CommonModule} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs/operators';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-program-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './program-card.component.html',
  standalone: true,
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent {
  private programService = inject(ProgramService);
  public id = input.required<string>();

  // Находим модуль по ID
  program: Signal<LearningModule | undefined> = toSignal(
    this.programService.getLearningModules().pipe(
      map(data => data.learningModules.find(module => module.id === +this.id()))
    ))
}
