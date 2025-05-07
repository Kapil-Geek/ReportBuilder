import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportBuilderComponent } from "../report-builder/report-builder.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReportBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'report-builder';
}
