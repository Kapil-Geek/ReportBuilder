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
    { label: 'Timesheets', selected: false },
    { label: 'Absence', selected: false }
  ];

  availableJobFields = ['JobId', 'JobType', 'Client Name', 'Period End Date', 'Job Code', 'JobStatus'];
  availableAbsenceFields = ['AbsenceId', 'AbsenceType', 'Absence Name', 'Absence End Date', 'Absence Code', 'Duration']
  availableTimesheetsFields = ['Id', 'Type', 'Name', 'End Date', 'Code', 'Status']

  selectedModules: string[] = [];
  selectedFields: any[] = []; // Replace with actual fields
  appliedFilters: any[] = []; // Replace with actual filters
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
    debugger;
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
    debugger;
    // Logic for saving report
  }

  updateSelectedField(item:any, _module: any){
    this.selectedFields.push({label: item, module: _module});
  }

  removeSelectedField(item:any){
    this.selectedFields = this.selectedFields.filter(x=> x.label != item.label);
  }

  // updateAppliedFilters(_field : any, _module: any, _action: any, _value: any){
  //   this.selectedFields.push({field: _field, module: _module, action: _action, value: _value});
  // }

  updateAppliedFilters(){
    this.appliedFilters.push({field:'', module: '', action: '', value: ''});
  }

  removeAppliedFilters(item:any){
    this.appliedFilters = this.appliedFilters.filter(x=> x.field != item.field);
  }

  updateAction(i:any, event: any){
    this.appliedFilters[i].action = event.target.value;
  }

  updateValue(i:any, event: any){
    this.appliedFilters[i].value = event.target.value;
  }

  updateField(i:any, event: any){
    debugger;
    this.appliedFilters[i].field = event.target.value;
    this.appliedFilters[i].module = this.selectedFields.find(x=> x.label == event.target.value).module;
  }
}
