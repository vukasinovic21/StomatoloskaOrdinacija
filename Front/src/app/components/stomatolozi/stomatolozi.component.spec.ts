import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StomatoloziComponent } from './stomatolozi.component';

describe('StomatoloziComponent', () => {
  let component: StomatoloziComponent;
  let fixture: ComponentFixture<StomatoloziComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StomatoloziComponent]
    });
    fixture = TestBed.createComponent(StomatoloziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
