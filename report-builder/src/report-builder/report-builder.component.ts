import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { availableModules, availableFields } from '../../data';
import { CommonModule } from '@angular/common';
import { AgGridAngular, AgGridModule } from "ag-grid-angular";
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';


@Component({
  selector: 'app-report-builder',
  standalone: true,
  imports: [FormsModule, CommonModule, AgGridModule],
  templateUrl: './report-builder.component.html',
  styleUrl: './report-builder.component.css'
})
export class ReportBuilderComponent {
  // columnDefs = [
  //   { field: 'make' },
  //   { field: 'model' },
  //   { field: 'price' }
  // ];

  // rowData = [
  //   { make: 'Toyota', model: 'Corolla', price: 35000 },
  //   { make: 'Ford', model: 'Focus', price: 32000 },
  //   { make: 'BMW', model: 'X5', price: 72000 }
  // ];

  constructor() {
    // Register the ClientSideRowModelModule
    ModuleRegistry.registerModules([ClientSideRowModelModule]);
  }
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

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
  columnDefs: ColDef[] = [];
  gridApi!: GridApi;


  rowDataa: any[] = [];
  columnData = [];
  sectionOpen = {
    fields: false,
    filters: false,
    output: true,
  };

  ngOnInit() {
    this.updateModuleSelection();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
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
    this.rowDataa = [
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];

    // Column Definitions: Defines the columns to be displayed.
    this.columnDefs = [
      { field: "make", flex: 1 },
      { field: "model", flex: 1 },
      { field: "price", flex: 1 },
      { field: "electric", flex: 1 }
    ];
    this.updateGrid();
  }

  saveReport() {
    // Logic for saving report
  }

  clearAllFields() {

  }

  updateSelectedField(item: any, _module: any) {
    this.selectedFields.push({ label: item, module: _module });
  }

  removeSelectedField(item: any) {
    this.selectedFields = this.selectedFields.filter(x => x.label != item.label);
  }

  // updateAppliedFilters(_field : any, _module: any, _action: any, _value: any){
  //   this.selectedFields.push({field: _field, module: _module, action: _action, value: _value});
  // }

  updateAppliedFilters() {
    this.appliedFilters.push({ field: '', module: '', action: '', value: '' });
  }

  removeAppliedFilters(item: any) {
    this.appliedFilters = this.appliedFilters.filter(x => x.field != item.field);
  }

  updateAction(i: any, event: any) {
    this.appliedFilters[i].action = event.target.value;
  }

  updateValue(i: any, event: any) {
    this.appliedFilters[i].value = event.target.value;
  }

  updateField(i: any, event: any) {
    this.appliedFilters[i].field = event.target.value;
    this.appliedFilters[i].module = this.selectedFields.find(x => x.label == event.target.value).module;
  }

  updateGrid() {
    this.gridApi.setGridOption('rowData', this.rowDataa);
  }
}
