import { Component } from '@angular/core';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html'
})
export class HabitFormComponent {
  newHabit = '';

  constructor(private habitService: HabitService) {}

  addHabit() {
    this.habitService.addHabit(this.newHabit);
    this.newHabit = '';
  }
}
