import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { CounterComponent } from './components/counter/counter';
import { ToggleTextComponent } from './components/toggle-text/toggle-text';
import { SkillsListComponent } from './components/skills-list/skills-list';
import { EmployeeCardComponent } from './components/employee-card/employee-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CounterComponent, ToggleTextComponent, 
    SkillsListComponent, EmployeeCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}
