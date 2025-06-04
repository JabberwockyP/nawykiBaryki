import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitItemComponent } from '../habit-item/habit-item.component';
import { HabitFormComponent } from '../habit-form/habit-form.component';

@Component({
  selector: 'app-habit-list',
  standalone: true,
  imports: [CommonModule, HabitItemComponent, HabitFormComponent],
  templateUrl: './habit-list.component.html'
})
export class HabitListComponent {
  habits = [
    { name: 'picie wody', completed: false },
    { name: 'Cwieczenie', completed: true }
  ];

  
    onHabitAdded(habitName: string) {
      this.habits.push({
        name: habitName,
        completed: false,
      });
    }
  }

