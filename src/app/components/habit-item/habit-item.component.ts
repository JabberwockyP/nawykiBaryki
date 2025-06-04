import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habit-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habit-item.component.html'
})
export class HabitItemComponent {
  @Input() habit: any;
  @Output() habitChanged = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  toggleHabit() {
    this.habit.completed = !this.habit.completed;
    this.habitChanged.emit();
  }

  isCompletedToday(): boolean {
    return !!this.habit.completed;
  }

  getProgress(): number {
    return this.habit.completed ? 100 : 0;
  }

  onDeleteClick() {
    this.delete.emit();
  }
}
