import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBuilderUiComponent } from './report-builder-ui.component';

describe('ReportBuilderUiComponent', () => {
  let component: ReportBuilderUiComponent;
  let fixture: ComponentFixture<ReportBuilderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportBuilderUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportBuilderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
