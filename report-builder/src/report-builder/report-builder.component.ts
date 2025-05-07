import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { availableModules, availableFields } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-builder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './report-builder.component.html',
  styleUrl: './report-builder.component.css'
})
export class ReportBuilderComponent {
  availableModules = [
    { label: 'Jobs', selected: true },
    { label: 'Timesheets', selected: true },
    { label: 'Absence', selected: true },
    { label: 'Financials', selected: false },
    { label: 'Projects', selected: false },
    { label: 'Personnel', selected: false },
  ];

  selectedModules: string[] = [];
  selectedFields: string[] = []; // Replace with actual fields
  appliedFilters: string[] = []; // Replace with actual filters
  reportTitle = '';
  groupBy = '';

  sectionOpen = {
    fields: false,
    filters: false,
    output: true,
  };

  ngOnInit() {
    this.updateModuleSelection();
  }

  updateModuleSelection() {
    this.selectedModules = this.availableModules
      .filter(mod => mod.selected)
      .map(mod => mod.label);
  }

  toggleSection(section: 'fields' | 'filters' | 'output') {
    this.sectionOpen[section] = !this.sectionOpen[section];
  }

  cancel() {
    // Logic for cancel
  }

  saveDraft() {
    // Logic for saving draft
  }

  previewReport() {
    // Logic for preview
  }

  saveReport() {
    // Logic for saving report
  }
}
