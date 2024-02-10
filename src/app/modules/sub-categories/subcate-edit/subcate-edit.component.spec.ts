import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcateEditComponent } from './subcate-edit.component';

describe('SubcateEditComponent', () => {
  let component: SubcateEditComponent;
  let fixture: ComponentFixture<SubcateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcateEditComponent]
    });
    fixture = TestBed.createComponent(SubcateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
