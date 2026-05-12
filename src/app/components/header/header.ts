import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  title = 'Angular Learning';
  name = 'Saurabh';
  city = 'Pune';
  role = 'Frontend Developer';
  skills = ['React', 'Redux', 'Angular', 'TypeScript'];

  showMessage() {
  alert('Button clicked');
}

getRole(){
  return console.log(this.role);
}

}
