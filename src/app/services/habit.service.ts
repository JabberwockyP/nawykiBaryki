import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[] = [];

  getHabits(): Habit[] {
    return this.habits;
  }

  addHabit(name: string) {
    if (!name.trim()) return;
    this.habits.push({ name: name.trim(), datesCompleted: new Set() });
  }

  toggleHabitCompletion(habit: Habit) {
    const today = this.getTodayDate();
    if (habit.datesCompleted.has(today)) {
      habit.datesCompleted.delete(today);
    } else {
      habit.datesCompleted.add(today);
    }
  }

  isCompletedToday(habit: Habit): boolean {
    return habit.datesCompleted.has(this.getTodayDate());
  }

  getCompletionRate(habit: Habit): number {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - 29);
    let count = 0;
    for (let i = 0; i < 30; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      if (habit.datesCompleted.has(dateStr)) count++;
    }
    return Math.round((count / 30) * 100);
  }

  private getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
