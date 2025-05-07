import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-report-builder-ui',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  templateUrl: './report-builder-ui.component.html',
  styleUrl: './report-builder-ui.component.css'
})

export class ReportBuilderUiComponent {
  expandedSections = {
    moduleSelection: true,
    fieldSelection: false,
    advancedFilters: false,
    outputSettings: false
  };

  selectedModules = ['Jobs'];

  selectedFields = [
    { id: 'job-1', name: 'Job Title', module: 'Jobs' },
    { id: 'job-2', name: 'Client', module: 'Jobs' }
  ];

  filters = [
    { field: 'Job Status', condition: 'equals', value: 'Active' }
  ];

  reportTitle = 'My Custom Job Report';
  outputType = 'table';

  availableModules = [
    { id: 'jobs', name: 'Jobs' },
    { id: 'timesheets', name: 'Timesheets' },
    { id: 'absence', name: 'Absence' },
    { id: 'projects', name: 'Projects' },
    { id: 'finance', name: 'Finance' }
  ];

  availableFields = {
    'Jobs': [
      { id: 'job-1', name: 'Job Title' },
      { id: 'job-2', name: 'Client' },
      { id: 'job-3', name: 'Status' },
      { id: 'job-4', name: 'Start Date' },
      { id: 'job-5', name: 'End Date' },
      { id: 'job-6', name: 'Budget' }
    ],
    'Timesheets': [
      { id: 'timesheet-1', name: 'Employee' },
      { id: 'timesheet-2', name: 'Hours' },
      { id: 'timesheet-3', name: 'Date' },
      { id: 'timesheet-4', name: 'Project' }
    ],
    'Absence': [
      { id: 'absence-1', name: 'Employee' },
      { id: 'absence-2', name: 'Type' },
      { id: 'absence-3', name: 'Start Date' },
      { id: 'absence-4', name: 'End Date' }
    ]
  };

  toggleSection(section: keyof typeof this.expandedSections): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  toggleModule(moduleName: string): void {
    const index = this.selectedModules.indexOf(moduleName);
    if (index > -1) {
      this.selectedModules.splice(index, 1);
    } else {
      this.selectedModules.push(moduleName);
    }
  }
}
