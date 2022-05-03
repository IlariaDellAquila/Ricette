import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipComponent } from './add-recip.component';

describe('AddRecipComponent', () => {
  let component: AddRecipComponent;
  let fixture: ComponentFixture<AddRecipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
