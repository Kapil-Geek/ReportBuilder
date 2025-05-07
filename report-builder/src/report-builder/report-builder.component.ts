import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { availableModules, availableFields } from '../../data';
import { CommonModule } from '@angular/common';
import { AgGridAngular, AgGridModule } from "ag-grid-angular";
import type { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import reportData from "../app/reportData";
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
    { label: 'Invoice', selected: false }
  ];

availableJobFields: string[] = [
    "Job ID",
    "Job Type",
    "Period Ended",
    "Code",
    "Name",
    "Target Start Date",
    "Target End Date",
    "Actual Closed Date",
    "Agreed Fee",
    "Allocated Hours Worked",
    "Annual Accounts Month",
    "Billing Group",
    "Budget Total",
    "Client Type",
    "Client Type Subcategory",
    "Contact Group",
    "Contact Manager",
    "Contact Partner",
    "Current Job State",
    "Current Job Status",
    "Currently Responsible",
    "Date Changed",
    "Date of last Invoice",
    "Effective Closed Date",
    "Expected Cost",
    "Invoice Total",
    "Job Creation Date",
    "Job Details",
    "Job Manager",
    "Job Partner",
    "Minimum Fee",
    "Non-Allocated Hours Worked",
    "Opening WIP",
    "Opening WIP Description",
    "Owner",
    "Priority"
  ];
  

  // availableJobFields = ['JobId', 'JobType', 'Client Name', 'Period End Date', 'Job Code', 'JobStatus'];
  availableInvoiceFields = ["Invoice Id",
  "Invoice description",
  "Invoice Total"]
  availableTimesheetsFields = ["Total Hours Allocated",
  "Total Hours Worked",
  "Turnaround Time",
  "WIP Total",
  "Write-on",
  "Reg25.101",
  "Total Billable Hours",
  "Timesheet Status"]

  selectedModules: string[] = [];
  selectedFields: any[] = []; // Replace with actual fields
  appliedFilters: any[] = []; // Replace with actual filters
  reportTitle = '';
  groupBy = '';
  columnDefs: ColDef[] = [];
  gridApi!: GridApi;
 reportData : any = reportData;


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

    this.columnDefs = [
      { field: "JobID", flex: 1 },
      { field: "JobType", flex: 1 },
      { field: "PeriodEnded", flex: 1 },
      { field: "Code", flex: 1 },
      { field: "Name", flex: 1 },
      { field: "TargetStartDate", flex: 1 },
      { field: "TargetEndDate", flex: 1 }
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
    this.gridApi.setGridOption('rowData', this.reportData);
  }
}
