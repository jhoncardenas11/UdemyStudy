import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DngStyleComponent } from './dng-style.component';

describe('DngStyleComponent', () => {
  let component: DngStyleComponent;
  let fixture: ComponentFixture<DngStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DngStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DngStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
