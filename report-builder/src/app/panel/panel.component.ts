import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})

export class PanelComponent {
  // Define available panels and their visibility
  panels: { [key: string]: boolean } = {
    moduleSelection: true,
    fieldSelection: false,
    advancedFilters: false,
    outputSettings: false
  };

  // Toggle visibility of a selected panel
  togglePanel(panel: string) {
    for (const key in this.panels) {
      this.panels[key] = false;
    }
    if (this.panels.hasOwnProperty(panel)) {
      this.panels[panel] = true;
    }
  }
}
