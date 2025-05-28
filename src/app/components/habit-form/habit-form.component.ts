import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './habit-form.component.html'
})
export class HabitFormComponent {
  newHabitName: string = '';
  @Output() habitAdded = new EventEmitter<string>();

  addHabit() {
    if (this.newHabitName.trim()) {
      this.habitAdded.emit(this.newHabitName.trim());
      this.newHabitName = '';
    }
  }
}

