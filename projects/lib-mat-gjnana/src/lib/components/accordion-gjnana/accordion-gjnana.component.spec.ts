import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGjnanaComponent } from './accordion-gjnana.component';

describe('AccordionGjnanaComponent', () => {
  let component: AccordionGjnanaComponent;
  let fixture: ComponentFixture<AccordionGjnanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionGjnanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionGjnanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
