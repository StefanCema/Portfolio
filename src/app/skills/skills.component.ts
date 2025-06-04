import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: '85%' },
    { name: 'Ionic', level: '80%' },
    { name: 'TypeScript', level: '80%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'SVN', level: '70%' },
    { name: 'Git', level: '75%' },
    { name: 'Rancher', level: '65%' },
  ];
}
