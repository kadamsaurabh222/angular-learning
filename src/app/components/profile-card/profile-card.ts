import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCardComponent {
  @Input() name = '';

  @Input() role = '';

  @Input() imageUrl = '';
}
