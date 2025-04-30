import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckBoxGjnanaComponent } from './checkbox-gjnana.component';

describe('CheckBoxComponent', () => {
  let component: CheckBoxGjnanaComponent;
  let fixture: ComponentFixture<CheckBoxGjnanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxGjnanaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckBoxGjnanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
