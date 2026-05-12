import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  imports: [],
  templateUrl: './skills-list.html',
  styleUrl: './skills-list.css',
})
export class SkillsListComponent {

  skills = [
    'React',
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS'
  ];

// add id 
  employees = [
  { 
    id: 1,
    name: 'Saurabh',
    role: 'Frontend Developer',
    experience: 3
  },
  {
    id: 2,
    name: 'John',
    role: 'Backend Developer',
    experience: 5
  },
  {
    id: 3,
    name: 'Alice',
    role: 'Full Stack Developer',
    experience: 4
  }     
]

}