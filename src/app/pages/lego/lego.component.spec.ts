import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoComponent } from './lego.component';

describe('LegoComponent', () => {
  let component: LegoComponent;
  let fixture: ComponentFixture<LegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
