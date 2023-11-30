import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPizzaComponent } from './new-pizza.component';

describe('NewPizzaComponent', () => {
  let component: NewPizzaComponent;
  let fixture: ComponentFixture<NewPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPizzaComponent]
    });
    fixture = TestBed.createComponent(NewPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
