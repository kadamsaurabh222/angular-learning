import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-text',
  imports: [],
  templateUrl: './toggle-text.html',
  styleUrl: './toggle-text.css',
})
export class ToggleTextComponent {

  showText = true;

  toggleText() {
    this.showText = !this.showText;
  }

}