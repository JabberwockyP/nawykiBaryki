import { Component } from '@angular/core';
import { HabitFormComponent } from './components/habit-form/habit-form.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HabitFormComponent, HabitListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
