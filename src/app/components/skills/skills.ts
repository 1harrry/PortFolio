import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  skills = [
    {
      name: 'Languages',
      items: [
        { name: 'C#', icon: '🔷', level: 90 },
        { name: 'SQL', icon: '🗄️', level: 85 },
        { name: 'JavaScript', icon: '📜', level: 80 },
        { name: 'PHP', icon: '🐘', level: 75 }
      ]
    },
    {
      name: 'Frameworks & Tools',
      items: [
        { name: 'ASP.NET', icon: '🌐', level: 90 },
        { name: '.NET Core', icon: '⚙️', level: 88 },
        { name: 'Windows Forms', icon: '🪟', level: 85 },
        { name: 'REST APIs', icon: '🔌', level: 85 }
      ]
    },
    {
      name: 'Databases & DevOps',
      items: [
        { name: 'SQL Server', icon: '📊', level: 88 },
        { name: 'Docker', icon: '🐳', level: 75 },
        { name: 'Git', icon: '📦', level: 85 },
        { name: 'Azure AD', icon: '☁️', level: 80 }
      ]
    }
  ];
}