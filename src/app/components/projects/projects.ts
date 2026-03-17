import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    {
      name: 'Meeting Room Booking System',
      type: 'Enterprise Application',
      description: 'Azure AD authentication, Microsoft Graph API integration, modern dashboard UI with real-time availability tracking.',
      technologies: ['ASP.NET', 'Azure AD', 'Graph API', 'SQL Server']
    },
    {
      name: 'WeManage Enterprise Suite',
      type: 'Enterprise Application',
      description: 'Comprehensive management solution with advanced dashboards, reports, and Excel/PDF exports.',
      technologies: ['ASP.NET', 'SQL Server', 'JavaScript', 'IIS']
    },
    {
      name: 'Invoice Integration Application',
      type: 'Windows Application',
      description: 'WinForms application to process XML invoice data and export to Excel with custom formatting.',
      technologies: ['C#', 'WinForms', 'XML', 'Excel']
    },
    {
      name: 'Survey Management System',
      type: 'Web Application',
      description: 'Custom survey forms with PHP and JavaScript for US colleges and universities.',
      technologies: ['PHP', 'JavaScript', 'SQL Server', 'HTML/CSS']
    }
  ];
}