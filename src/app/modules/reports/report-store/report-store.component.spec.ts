import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStoreComponent } from './report-store.component';

describe('ReportStoreComponent', () => {
  let component: ReportStoreComponent;
  let fixture: ComponentFixture<ReportStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportStoreComponent]
    });
    fixture = TestBed.createComponent(ReportStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
