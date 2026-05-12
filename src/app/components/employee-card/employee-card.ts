import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCardComponent {

  @Input() name = '';

  @Input() role = '';

  @Input() experience = 0;

}