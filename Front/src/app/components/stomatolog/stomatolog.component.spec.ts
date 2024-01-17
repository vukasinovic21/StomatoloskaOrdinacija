import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StomatologComponent } from './stomatolog.component';

describe('StomatologComponent', () => {
  let component: StomatologComponent;
  let fixture: ComponentFixture<StomatologComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StomatologComponent]
    });
    fixture = TestBed.createComponent(StomatologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
