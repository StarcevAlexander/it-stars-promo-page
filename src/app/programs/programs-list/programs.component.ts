import {Component, effect, inject, signal, untracked} from '@angular/core';
import {CommonModule} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs/operators';
import {ProgramService} from '../program.service';
import {LearningModule} from '../program.model';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {SendButtonComponent} from "../../send-button/send-button.component";

@Component({
  selector: 'app-programs',
  standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        NgOptimizedImage,
        SendButtonComponent
    ],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  private programService = inject(ProgramService);

  public allModules = toSignal(
    this.programService.getLearningModules().pipe(
      map(data => this.shuffleArray(data.learningModules))
    ),
    {initialValue: [] as LearningModule[]}
  );

  public visibleModules = signal<LearningModule[]>([]);
  public showCount = signal(8);

  constructor() {
    effect(() => {
      const modules = this.allModules();
      const count = this.showCount();
      untracked(() => {
        this.visibleModules.set(modules.slice(0, count));
      });
    }, {allowSignalWrites: true});
  }

  loadMore() {
    this.showCount.update(val => val + 8);
  }

  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
