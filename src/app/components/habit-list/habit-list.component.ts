import { Component, OnInit } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { Habit } from '../../models/habit.model';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html'
})
export class HabitListComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private habitService: HabitService) {}

  ngOnInit() {
    this.habits = this.habitService.getHabits();
  }
}
