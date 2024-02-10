import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcateListComponent } from './subcate-list.component';

describe('SubcateListComponent', () => {
  let component: SubcateListComponent;
  let fixture: ComponentFixture<SubcateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcateListComponent]
    });
    fixture = TestBed.createComponent(SubcateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
