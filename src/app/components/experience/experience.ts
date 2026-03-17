import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience {
  experiences = [
    {
      period: 'July 2025 - Jan 2026',
      position: 'Software Developer',
      company: 'Converse Solutions',
      location: 'Trichy',
      achievements: [
        'Led end-to-end development of enterprise applications including WeManage and Meetly',
        'Built scalable solutions using ASP.NET, SQL Server, and Azure AD',
        'Implemented meeting room booking system with Graph API integration',
        'Designed advanced dashboards with optimized SQL queries'
      ],
      technologies: ['ASP.NET', 'SQL Server', 'Azure AD', 'JavaScript', 'IIS']
    },
    {
      period: 'July 2024 - Dec 2024',
      position: 'DotNetCore Developer',
      company: 'Hashtechy Technologies',
      location: 'Ahmedabad',
      achievements: [
        'Developed Web APIs using gRPC framework',
        'Designed CRUD operations with enhanced modularity',
        'Gained hands-on experience with Docker'
      ],
      technologies: ['.NET Core', 'gRPC', 'Docker', 'Web APIs']
    },
    {
      period: 'April 2024 - July 2024',
      position: 'DotNet Developer',
      company: 'MamoTechnolabs',
      location: 'Remote',
      achievements: [
        'Developed Web APIs for dropdowns and data grids using Kendo Telerik UI',
        'Implemented data exporting to Excel and PDF',
        'Optimized SQL Server stored procedures'
      ],
      technologies: ['.NET', 'Kendo UI', 'SQL Server', 'JavaScript']
    },
    {
      period: 'May 2023 - March 2024',
      position: 'DotNet Developer',
      company: 'App Innovation Technologies',
      location: 'Coimbatore',
      achievements: [
        'Integrated XML responses with WinForms for QuickBooks data',
        'Developed invoice integration application for data extraction',
        'Created survey forms with PHP and JavaScript'
      ],
      technologies: ['WinForms', 'C#', 'SQL Server', 'PHP']
    }
  ];
}